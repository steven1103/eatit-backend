/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArgsType, Field, InputType, PartialType } from "@nestjs/graphql";
import { CreateRestaurantDto } from "./create-restaurant.dto";

@InputType()
export class UpdateRestaurantDtoInputType extends PartialType(CreateRestaurantDto) {}

@InputType()
export class UpdateRestaurantDto {
    @Field(type=>Number)
    id:number;

    @Field(type=>UpdateRestaurantDtoInputType)
    data : UpdateRestaurantDtoInputType
}