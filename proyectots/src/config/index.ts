export const PORT:number = process.env.PORT ? +process.env.PORT:8080;
export const NODE_ENV:string = process.env.NODE_ENV ? process.env.NODE_ENV:'development';
export const DB_NAME:string = process.env.DB_NAME ? process.env.DB_NAME:'prueba'; 
export const DB_USER:string = process.env.DB_USER ? process.env.DB_USER:'root'; 
export const DB_PASSWORD:string = process.env.DB_PASSWORD ? process.env.DB_PASSWORD:'password'; 
export const DB_HOST :string = process.env.DB_HOST ? process.env.DB_HOST:'localhost'; 
export const AWS_REGION:string = process.env.AWS_REGION ? process.env.AWS_REGION:''; 
export const AWS_ACCESS_KEY:string = process.env.AWS_ACCESS_KEY ? process.env.AWS_ACCESS_KEY:'';
export const AWS_SECRET_ACCESS_KEY:string = process.env.AWS_SECRET_ACCESS_KEY ? process.env.AWS_SECRET_ACCESS_KEY:'';
export const AWS_SESSION_TOKEN:string = process.env.AWS_SESSION_TOKEN? process.env.AWS_SESSION_TOKEN:'';
export const PREFIX_TABLE = NODE_ENV === "production" ? '':'-DEV';