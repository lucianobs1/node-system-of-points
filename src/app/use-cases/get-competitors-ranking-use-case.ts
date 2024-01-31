import { Injectable } from '@nestjs/common';
import { CompetitorsRepository } from '../repositories/competitors-repository';
import { Competitor } from '../entities/competitor';

interface GetRankingUseCaseResponse {
  competitors: Competitor[];
}

@Injectable()
export class GetCompetitorsRankingUseCase {
  constructor(private competitorsRepository: CompetitorsRepository) {}

  async execute(): Promise<GetRankingUseCaseResponse> {
    const competitors = await this.competitorsRepository.findManyOrderByScore();

    return { competitors };
  }
}
