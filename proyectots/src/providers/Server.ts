import express, {Request, Response} from 'express';
import AbstractController from '../controllers/AbstractController';
import db from '../models';

class Server{
    //Atributos
    private app:express.Application;
    private port:number;
    private env:string;

    //Metodos
    constructor(appInit:{port:number,env:string;middlewares:any[],controllers:AbstractController[]}){
        this.app=express();
        this.port=appInit.port;
        this.env=appInit.env; 
        this.loadMiddlewares(appInit.middlewares);  
        this.loadControllers(appInit.controllers);   
    }

    private loadMiddlewares(middlewares:any[]):void{
        middlewares.forEach((middleware:any)=>{
            this.app.use(middleware);
        })
    }

    private loadControllers(controllers:AbstractController[]){
        controllers.forEach((controller:AbstractController)=>{
            this.app.use(`/${controller.prefix}`,controller.router);
        })
    }

    public async init(){
        await db.sequelize.sync();
        this.app.listen(this.port,()=>{
            console.log(`Server:Running 🚀 @'http://localhost:${this.port}'`)
        })

        //db.sequelize.sync()
        //    .then()
    }

}

export default Server;