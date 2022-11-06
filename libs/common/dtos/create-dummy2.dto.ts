import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDummy2Dto {
  @IsNotEmpty()
  @IsString()
  random: string;

  @IsNotEmpty()
  @IsNumber()
  random2: number;
}
