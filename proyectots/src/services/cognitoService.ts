import AWS from 'aws-sdk';
import { COGNITO_APP_CLIENT_ID,COGNITO_APP_SECRET_HASH,AWS_REGION } from '../config';

type CognitoAttributes = 'email' |'name'|'phone_number';

class CognitoService{
    //Conexión a cognito
    private config: AWS.CognitoIdentityServiceProvider.ClientConfiguration;
    private cognitoIdentity:AWS.CognitoIdentityServiceProvider;

    //Conexión a la acplicación
    private clientId = COGNITO_APP_CLIENT_ID;
    private secretHash = COGNITO_APP_SECRET_HASH;

    //Singleton
    private static instance:CognitoService;
    public static getInstance():CognitoService{
        if(this.instance){
            return this.instance;
        }
        this.instance= new CognitoService();
        return this.instance;
    }

    private constructor(){
        this.config = {
            region: AWS_REGION,
        }
        this.cognitoIdentity = new AWS.CognitoIdentityServiceProvider(this.config)
    }

    //Autenticación
    public async signInUser(email:string,password:string){
        const params={
            AuthFlow: 'USER_PASSWORD_AUTH',
            ClientId:this.clientId,
            AuthParameters:{
                USERNAME:email,
                PASSWORD:password,
                //SECRET_HASH: this.ha
            }
        }
    }

    //Verificación de usuarios
    public async verifyUser(email:string,code:string){
        
    }
}

export default CognitoService;