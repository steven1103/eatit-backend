import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";

export class UserService {
    constructor (
        @InjectRepository(User) private readonly users: Repository<User>
    ) {}
}