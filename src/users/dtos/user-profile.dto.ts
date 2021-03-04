/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArgsType, Field, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/core.output';
import { User } from '../entities/user.entity';

@ArgsType()
export class UserProfileInput {
  @Field(type => Number)
  userId: number;
}

@ObjectType()
export class UserProfileOutput extends CoreOutput {
  @Field(type => User, { nullable: true })
  user?: User;
}
