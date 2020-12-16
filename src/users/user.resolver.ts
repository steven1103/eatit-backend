/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver,Query, Mutation, Args } from "@nestjs/graphql";
import { createAccountInput, createAccountOutput } from "./dtos/create-account.dto";
import { User } from "./entities/user.entity";
import { UserService } from "./user.service";

@Resolver(of => User)
export class UsersResolver {
    constructor(
        private readonly userService:UserService
    ) {}

    @Mutation(returns => createAccountOutput) 
    createAccount(@Args("input") createAccountInput:createAccountInput) {}
}