import { Request, Response } from "express";
import { checkSchema } from "express-validator";
import AbstractController from "./AbstractController";
import UserModel from "../modelsNOSQL/userNOSQL"; //No relaciona
import db from "../models"; //BD relacional

class AuthenticationController extends AbstractController{
    protected validateBody(type: any) {
        throw new Error("Method not implemented.");
    }
    //Singleton 
    private static instance:AuthenticationController;
    public static getInstance():AbstractController{
        if(this.instance)
            return this.instance;
        this.instance = new AuthenticationController("auth");
        return this.instance;
    }

    protected initRoutes(): void {
        this.router.post('/signup',this.signup.bind(this));
        //this.router.post('/verify',)
        //this.router.post('/signin',)
    }

    private async signup(req:Request,res:Response){
        const {email,password, name,role} = req.body;
        try{
            //Create el usuario de cognito
            const user= await this.cognitoService.signUpUser(email,password,[
                {
                    Name:'email',
                    Value:email
                } 
                
            ]);
            console.log('cognito user created',user);
            res.status(201).send({message:"User signedUp"})
        }catch(error:any){
            res.status(500).send({code:error.code,message:error.message})
        }
    }
    
}

export default AuthenticationController;