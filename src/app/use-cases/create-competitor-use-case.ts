import { Injectable } from '@nestjs/common';
import { CompetitorsRepository } from '../repositories/competitors-repository';
import { Competitor } from '../entities/competitor';

interface CreateCompetitorRequest {
  name: string;
  surname: string;
}

type CreateCompetitorResponse = void;

@Injectable()
export class CreateCompetitorUseCase {
  constructor(private competitorsRepository: CompetitorsRepository) {}

  async execute({
    name,
    surname,
  }: CreateCompetitorRequest): Promise<CreateCompetitorResponse> {
    const competitor = new Competitor({ name, surname });

    await this.competitorsRepository.create(competitor);
  }
}
