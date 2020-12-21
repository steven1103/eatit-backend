/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, InputType, ObjectType, PickType } from "@nestjs/graphql";
import { MutationOutPut } from "src/common/dtos/output.dto";
import { User } from "../entities/user.entity";

@ObjectType()
export class LoginOutPut extends MutationOutPut {
    @Field(type=>String,{nullable:true})
    token?:string;
}

@InputType()
export class LoginInPut extends PickType(User, ["email","password"]) {}