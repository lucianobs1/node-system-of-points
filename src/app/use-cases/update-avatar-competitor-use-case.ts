import { Injectable } from '@nestjs/common';
import { CompetitorsRepository } from '../repositories/competitors-repository';
import { ResourceNotFoundError } from './errors/resource-not-found-error';
import { IStorageProvider } from 'src/shared/storage-provider';

type FileProps = {
  filename: string;
  originalname: string;
  mimeType: string;
  buffer: Buffer;
  size: number;
};

interface UpdateAvatarCompetitorRequest {
  params: {
    id: string;
  };
  file: FileProps;
}

type UpdateAvatarCompetitorResponse = void;

@Injectable()
export class UpdateAvatarCompetitorUseCase {
  constructor(
    private competitorsRepository: CompetitorsRepository,
    private storageProvider: IStorageProvider,
  ) {}

  async execute({
    params,
    file,
  }: UpdateAvatarCompetitorRequest): Promise<UpdateAvatarCompetitorResponse> {
    const competitor = await this.competitorsRepository.findById(params.id);

    if (!competitor) {
      throw new ResourceNotFoundError();
    }

    if (!file) {
      throw new ResourceNotFoundError();
    }

    if (competitor.avatar) {
      this.storageProvider.deleteFile(competitor.avatar);
    }

    competitor.avatar = file.filename;

    await this.competitorsRepository.save(competitor);
  }
}
