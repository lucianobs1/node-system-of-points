import { Injectable } from '@nestjs/common';
import { CompetitorsRepository } from '../repositories/competitors-repository';
import { ResourceNotFoundError } from './errors/resource-not-found-error';
import { Competitor } from '../entities/competitor';

interface UpdateCompetitorRequest {
  id: string;
  name: string;
  surname: string;
}

interface UpdateCompetitorResponse {
  competitor: Competitor;
}

@Injectable()
export class UpdateCompetitorUseCase {
  constructor(private competitorsRepository: CompetitorsRepository) {}

  async execute({
    id,
    name,
    surname,
  }: UpdateCompetitorRequest): Promise<UpdateCompetitorResponse> {
    const competitor = await this.competitorsRepository.findById(id);

    if (!competitor) {
      throw new ResourceNotFoundError();
    }

    if (!name) {
      return;
    }

    if (!surname) {
      return;
    }

    competitor.name = name;
    competitor.surname = surname;

    competitor.updated();

    await this.competitorsRepository.save(competitor);

    return { competitor };
  }
}
