import { IsNotEmpty } from 'class-validator';

export class CreateCompetitorDTO {
  @IsNotEmpty()
  name: string;
}
