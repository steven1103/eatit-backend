/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { User } from '../entities/user.entity';

@InputType()
export class createAccountInput extends PickType(User, [
  'email',
  'password',
  'role',
]) {}

@ObjectType()
export class createAccountOutput {
    @Field(type => String, {nullable:true})
    error?:string

    @Field(type=>Boolean)
    ok:boolean;
}