import { Injectable } from '@nestjs/common';
import { CompetitorsRepository } from '../repositories/competitors-repository';
import { Competitor } from '../entities/competitor';

interface GetCompetitorsResponse {
  competitors: Competitor[];
}

@Injectable()
export class GetCompetitorsUseCase {
  constructor(private competitorsRepository: CompetitorsRepository) {}

  async execute(): Promise<GetCompetitorsResponse> {
    const competitors = await this.competitorsRepository.findMany();

    return { competitors };
  }
}
