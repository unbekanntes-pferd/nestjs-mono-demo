import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDummyDto {
  @IsNotEmpty()
  @IsNumber()
  random: number;

  @IsNotEmpty()
  @IsString()
  random2: string;
}
