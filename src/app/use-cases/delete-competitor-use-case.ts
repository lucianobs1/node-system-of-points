import { Injectable } from '@nestjs/common';
import { CompetitorsRepository } from '../repositories/competitors-repository';
import { ResourceNotFoundError } from './errors/resource-not-found-error';

interface DeleteCompetitorRequest {
  params: {
    id: string;
  };
}

type DeleteCompetitorResponse = void;

@Injectable()
export class DeleteCompetitorUseCase {
  constructor(private competitorsRepository: CompetitorsRepository) {}

  async execute({
    params,
  }: DeleteCompetitorRequest): Promise<DeleteCompetitorResponse> {
    const competitor = await this.competitorsRepository.findById(params.id);

    if (!competitor) {
      throw new ResourceNotFoundError();
    }

    await this.competitorsRepository.delete(competitor);
  }
}
