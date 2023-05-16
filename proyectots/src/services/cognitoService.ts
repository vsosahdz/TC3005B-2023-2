import AWS from 'aws-sdk';
import { COGNITO_APP_CLIENT_ID,COGNITO_APP_SECRET_HASH,AWS_REGION } from '../config';
import crypto from 'node:crypto';

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

    //Registro
    public async signUpUser(email:string,password:string, userAttr:{Name:CognitoAttributes;Value:string}[]){
        const params={
            ClientId:this.clientId,
            Password:password,
            Username:email,
            SecretHash:this.hashSecret(email),
            UserAttributes:userAttr,
        }
        
        return await this.cognitoIdentity.signUp(params).promise();
    }

    //Autenticación
    public async signInUser(email:string,password:string){
        const params={
            AuthFlow: 'USER_PASSWORD_AUTH',
            ClientId:this.clientId,
            AuthParameters:{
                USERNAME:email,
                PASSWORD:password,
                SECRET_HASH: this.hashSecret(email)
            }
        };
        return await this.cognitoIdentity.initiateAuth(params).promise();
    }

    //Verificación de usuarios
    public async verifyUser(email:string,code:string){
        const params ={
            ClientId:this.clientId,
            ConfirmationCode:code,
            Username:email,
            SecretHash: this.hashSecret(email)
        }
        return await this.cognitoIdentity.confirmSignUp(params).promise();
    }

    //TODO: funcionalidades necesarias de cognito

    private hashSecret(username:string):string{
        return crypto
            .createHmac('SHA256', this.secretHash)
            .update(username + this.clientId)
            .digest('base64');
    }

}

export default CognitoService;