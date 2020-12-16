import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { UsersResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
    imports:[TypeOrmModule.forFeature([
        User
    ])],
    providers:[UsersResolver, UserService]
})
export class UsersModule {}


