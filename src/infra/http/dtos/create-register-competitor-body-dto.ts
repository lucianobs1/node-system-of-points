import { IsNotEmpty } from 'class-validator';

export class CreateRegisterCompetitorDTO {
  @IsNotEmpty()
  name: string;
}
