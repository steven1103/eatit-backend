/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dtos/create-account.dto';
import { LoginInPut } from './dtos/login.dto';
import { User } from './entities/user.entity';
import * as jwt from "jsonwebtoken";
import { ConfigService } from '@nestjs/config';
import { JwtService } from 'src/jwt/jwt.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
    private readonly config:ConfigService,
    private readonly jwtService:JwtService,
  ) {
    this.jwtService
  }

  async createAccount({
    email,
    password,
    role,
  }: CreateAccountInput): Promise<{ ok: boolean; error?: string }> {
    try {
      const exists = await this.users.findOne({ email });
      if (exists) {
        return { ok: false, error: 'There is a user with that email already' };
      }
      await this.users.save(this.users.create({ email, password, role }));
      return { ok: true, error: null };
    } catch (e) {
      return { ok: false, error: "Couldn't create account" };
    }
  }

  async login({
    email,
    password,
  }: LoginInPut): Promise<{ ok: boolean; error?: string; token?: string }> {
    try {
      const user = await this.users.findOne({ email });
      if (!user) {
        return {
          ok:false,
          error:'User not Found'
        }
      }
      const passwordCorrect = await user.checkPassword(password)
      if (!passwordCorrect) {
        return {
          ok:false, 
          error: "비밀번호 불일치"
        }
      }
      const token = this.jwtService.sign(user.id)
      return {
        ok:true,
        token,
      }
    } catch (error) {
      return {
        ok:false,
        error
      }
    }
  }
}
