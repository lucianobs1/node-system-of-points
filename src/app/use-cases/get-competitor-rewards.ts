import { Injectable } from '@nestjs/common';
import { CompetitorsRepository } from '../repositories/competitors-repository';
import { ResourceNotFoundError } from './errors/resource-not-found-error';
import { Competitor } from '../entities/competitor';

interface GetCompetitorRewardsRequest {
  id: string;
}

interface GetCompetitorRewardsResponse {
  competitor: Competitor;
}

@Injectable()
export class GetCompetitorRewardsUseCase {
  constructor(private competitorsRepository: CompetitorsRepository) {}

  async execute({
    id,
  }: GetCompetitorRewardsRequest): Promise<GetCompetitorRewardsResponse> {
    const competitor = await this.competitorsRepository.findById(id);

    if (!competitor) {
      throw new ResourceNotFoundError();
    }

    return { competitor };
  }
}
