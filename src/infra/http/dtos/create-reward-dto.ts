import { IsNotEmpty } from 'class-validator';

export class CreateRewardDTO {
  @IsNotEmpty()
  categoryId: string;

  @IsNotEmpty()
  competitorId: string;

  @IsNotEmpty()
  description: string;
}
