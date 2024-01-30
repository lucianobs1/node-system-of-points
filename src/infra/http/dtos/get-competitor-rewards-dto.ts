import { IsNotEmpty } from 'class-validator';

export class GetCompetitorRewardsDTO {
  @IsNotEmpty()
  id: string;
}
