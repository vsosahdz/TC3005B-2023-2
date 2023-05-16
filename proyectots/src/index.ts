import Server from "./providers/Server";
import express from 'express';
import cors from 'cors';
import UserController from "./controllers/UserController";
import AuthenticationController from "./controllers/AuthenticationController";

const servidor = new Server({
    port:8080,
    middlewares:[
        express.json(),
        express.urlencoded({extended:true}),
        cors()
    ],
    controllers:[
        UserController.getInstance(),
        AuthenticationController.getInstance()
    ],
    env:'development'
});

declare global{
    namespace Express{
        interface Request{
            user:string;
            token:string;
        }
    }
}

servidor.init();
