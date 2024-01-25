import { IsNotEmpty } from 'class-validator';

export class CreateCategoryDTO {
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  points: number;
  @IsNotEmpty()
  money: number;
}
