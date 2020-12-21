/* eslint-disable @typescript-eslint/no-unused-vars */

import {
    Field,
    InputType,
    ObjectType,
    registerEnumType,
  } from '@nestjs/graphql';
  import { BeforeInsert, Column, Entity } from 'typeorm';
  import * as bcrypt from 'bcrypt';
  import { CoreEntity } from 'src/common/entities/core.entity';
  import { InternalServerErrorException } from '@nestjs/common';
import { IsEnum, IsString } from 'class-validator';
  
  enum UserRole {
    Client,
    Owner,
    Delivery,
  }
  
  registerEnumType(UserRole, { name: 'UserRole' });
  
  @InputType({ isAbstract: true })
  @ObjectType()
  @Entity()
  export class User extends CoreEntity {
    @Column()
    @Field(type => String)
    @IsString()
    email: string;
  
    @Column()
    @Field(type => String)
    @IsString()
    password: string;
  
    @Column({ type: 'enum', enum: UserRole })
    @Field(type => UserRole)
    @IsEnum(UserRole)
    role: UserRole;
  
    @BeforeInsert()
    async hashPassword(): Promise<void> {
      try {
        this.password = await bcrypt.hash(this.password, 10);
      } catch (e) {
        console.log(e);
        throw new InternalServerErrorException();
      }
    }
    
      async checkPassword(aPassword:string) :Promise<boolean> {
       try {
         const ok = await bcrypt.compare(aPassword, this.password);
         return ok;
       } catch (e) {
         console.log(e);
         throw new InternalServerErrorException();
       } 
      }
  }