import dynamodb from "../services/dynamoService";
import joi from 'joi';
import { PREFIX_TABLE } from "../config";

export enum UserRoles{
    ADMIN = 'ADMIN',
    SUPERVISOR = 'SUPERVISOR',
    CUSTOMER = 'CUSTOMER'
}

const UserModel = dynamodb.define('usuario',{
   hashKey:'awsCognitoId',
   timestamps:true,
   schema:{
    awsCognitoId: joi.string().required(),
    name:joi.string().required(),
    role:joi.string().required().default(UserRoles.CUSTOMER),
    email:joi.string().required().email()
   },
   tableName:`Usuario${PREFIX_TABLE}`,
   indexes:[
    {
        hashKey:'email',
        name:"EmailIndex",
        type:'global'
    }
   ] 
});

//Solo ejecutar la primera vez y despues comentar
/*dynamodb.createTables((err:any)=>{
    if(err) 
        return console.log('Error al crear la tabla:',err)
    console.log('Tabla creada exitosamente')
})*/

export default UserModel;

