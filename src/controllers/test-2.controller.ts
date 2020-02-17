import {Request,Response,NextFunction} from 'express';

export const sayHello2 = (req:Request,res:Response,next:NextFunction) =>{
    return res.status(200).json({message:'Hello Again'});
}