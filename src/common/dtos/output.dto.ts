/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class MutationOutPut {
    @Field(type => String, {nullable:true})
    error?:string

    @Field(type=>Boolean)
    ok:boolean;
}
