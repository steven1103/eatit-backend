import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtModule } from 'src/jwt/jwt.module';
import { User } from "./entities/user.entity";
import { UsersResolver } from './users.resolver';
import { UserService } from './users.service';

@Module({
    imports:[TypeOrmModule.forFeature([
        User
    ]), 
    ConfigService,
    JwtModule
],
    providers:[UsersResolver, UserService]
})
export class UsersModule {}


