import { randomBytes } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { CompetitorsRepository } from '../repositories/competitors-repository';
import { ResourceNotFoundError } from './errors/resource-not-found-error';
import { ResourceEmptyError } from './errors/resource-empty-error';

interface UpdateAvatarCompetitorUseCaseRequest {
  params: {
    id: string;
  };
  file: Express.Multer.File;
}

type UpdateAvatarCompetitorUseCaseResponse = void;

@Injectable()
export class UpdateAvatarCompetitorUseCase {
  constructor(private competitorsRepository: CompetitorsRepository) {}

  async execute({
    params,
    file,
  }: UpdateAvatarCompetitorUseCaseRequest): Promise<UpdateAvatarCompetitorUseCaseResponse> {
    const competitor = await this.competitorsRepository.findById(params.id);

    if (!competitor) {
      throw new ResourceNotFoundError();
    }

    if (!file) {
      throw new ResourceEmptyError();
    }

    const fileHash = randomBytes(16).toString('hex');
    const fileName = `${fileHash}-${file.originalname}`;

    competitor.avatar = fileName;

    return await this.competitorsRepository.save(competitor);
  }
}
