/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import {
  CreateAccountInput,
  createAccountOutput,
} from './dtos/create-account.dto';
import { LoginInPut, LoginOutPut } from './dtos/login.dto';
import { User } from './entities/user.entity';
import { UserService } from './users.service';

@Resolver(of => User)
export class UsersResolver {
  constructor(private readonly usersService: UserService) {}

  @Query(returns => Boolean)
  hi() {
    return true;
  }

  @Mutation(returns => createAccountOutput)
  async createAccount(
    @Args('input') createAccountInput: CreateAccountInput,
  ): Promise<createAccountOutput> {
    try {
      return await this.usersService.createAccount(
        createAccountInput,
      );
    
    } catch (error) {
      return {
        error,
        ok: false,
      };
    }
  }

  @Mutation(returns => LoginOutPut) 
  async login (@Args('input') loginInput:LoginInPut): Promise<LoginOutPut> {
    try {
      return this.usersService.login(loginInput)
      }
     catch (error) {
      return {
        ok:false, 
        error, 
      }
    }
  }

  @Query(returns => User) 
  me( @Context() context) {
   if (!context.user) {
     return
   } else {
     return context.user;
   }
  }
}