/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CharacterSheetWhereInput } from "./CharacterSheetWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CharacterSheetOrderByInput } from "./CharacterSheetOrderByInput";

@ArgsType()
class CharacterSheetFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CharacterSheetWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CharacterSheetWhereInput, { nullable: true })
  @Type(() => CharacterSheetWhereInput)
  where?: CharacterSheetWhereInput;

  @ApiProperty({
    required: false,
    type: [CharacterSheetOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CharacterSheetOrderByInput], { nullable: true })
  @Type(() => CharacterSheetOrderByInput)
  orderBy?: Array<CharacterSheetOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CharacterSheetFindManyArgs as CharacterSheetFindManyArgs };
