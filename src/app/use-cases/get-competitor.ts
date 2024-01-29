import { Injectable } from '@nestjs/common';
import { CompetitorsRepository } from '../repositories/competitors-repository';
import { ResourceNotFoundError } from './errors/resource-not-found-error';
import { Competitor } from '../entities/competitor';

interface GetCompetitorRequest {
  params: {
    id: string;
  };
}

interface GetCompetitorResponse {
  competitor: Competitor;
}

@Injectable()
export class GetCompetitorUseCase {
  constructor(private competitorsRepository: CompetitorsRepository) {}

  async execute({
    params,
  }: GetCompetitorRequest): Promise<GetCompetitorResponse> {
    const competitor = await this.competitorsRepository.findById(params.id);

    if (!competitor) {
      throw new ResourceNotFoundError();
    }

    return { competitor };
  }
}
