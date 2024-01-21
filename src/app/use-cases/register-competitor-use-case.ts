import { Injectable } from '@nestjs/common';
import { CompetitorsRepository } from '../repositories/competitors-repository';
import { CompetitorAlreadyExistsError } from './errors/competitor-already-exists-error';
import { Competitor } from '../entities/competitor';

interface RegisterCompetitorRequest {
  name: string;
}

type RegisterCompetitorResponse = void;

@Injectable()
export class RegisterCompetitorUseCase {
  constructor(private competitorsRepository: CompetitorsRepository) {}

  async execute({
    name,
  }: RegisterCompetitorRequest): Promise<RegisterCompetitorResponse> {
    const hasCompetitor = await this.competitorsRepository.findByName(name);

    if (hasCompetitor) {
      throw new CompetitorAlreadyExistsError();
    }

    const competitor = new Competitor({ name });

    await this.competitorsRepository.create(competitor);
  }
}
