/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { CoreEntity } from "src/common/entities/core.entity";
import { Column, Entity } from "typeorm";

enum UserRolw {
    Client,
    Owner,
    Delivery
}
@InputType({ isAbstract:true })
@ObjectType()
@Entity()
export class User extends CoreEntity {
    @Column()
    @Field(type =>String)
    email:string;

    @Column()
    @Field(type =>String)
    password:string;

    @Column()
    @Field(type =>String)
    role:string;
}