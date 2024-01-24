import { Injectable } from '@nestjs/common';
import { CompetitorsRepository } from '../repositories/competitors-repository';
import { ResourceNotFoundError } from './errors/resource-not-found-error';
import { Competitor } from '../entities/competitor';

interface GetCompetitorInfosRequest {
  params: {
    id: string;
  };
}

interface GetCompetitorInfosResponse {
  competitor: Competitor;
}

@Injectable()
export class GetCompetitorInfosUseCase {
  constructor(private competitorsRepository: CompetitorsRepository) {}

  async execute({
    params,
  }: GetCompetitorInfosRequest): Promise<GetCompetitorInfosResponse> {
    const competitor = await this.competitorsRepository.findById(params.id);

    if (!competitor) {
      throw new ResourceNotFoundError();
    }

    await this.competitorsRepository.save(competitor);

    return { competitor };
  }
}
