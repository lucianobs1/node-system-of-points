import { Injectable } from '@nestjs/common';
import { CompetitorsRepository } from '../repositories/competitors-repository';
import { CompetitorAlreadyExistsError } from './errors/competitor-already-exists-error';
import { Competitor } from '../entities/competitor';

interface CreateCompetitorRequest {
  name: string;
}

type CreateCompetitorResponse = void;

@Injectable()
export class CreateCompetitorUseCase {
  constructor(private competitorsRepository: CompetitorsRepository) {}

  async execute({
    name,
  }: CreateCompetitorRequest): Promise<CreateCompetitorResponse> {
    const hasCompetitor = await this.competitorsRepository.findByName(name);

    if (hasCompetitor) {
      throw new CompetitorAlreadyExistsError();
    }

    const competitor = new Competitor({ name });

    await this.competitorsRepository.create(competitor);
  }
}
