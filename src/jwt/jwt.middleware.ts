/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";


export function JwtMiddleware(req:Request,res:Response,next:NextFunction) {
    console.log(req.headers)
    next()
}

