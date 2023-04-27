import dynamodb from 'dynamodb';
import { AWS_REGION,AWS_ACCESS_KEY,AWS_SECRET_ACCESS_KEY,AWS_SESSION_TOKEN } from '../config';

//Configuración del SDK para trabajar con Dynamo
dynamodb.AWS.config.update({
    accessKeyId:AWS_ACCESS_KEY,
    secretAccessKey:AWS_SECRET_ACCESS_KEY,
    //solo cuando la key tenga caducidad
    sessionToken:AWS_SESSION_TOKEN,
    region:AWS_REGION
})

export default dynamodb