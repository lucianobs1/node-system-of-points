import {
  Controller,
  Param,
  Patch,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UpdateAvatarCompetitorUseCase } from 'src/app/use-cases/update-avatar-competitor-use-case';
import { FileDTO } from '../dtos/upload-dto';

@Controller('competitors')
export class CompetitorAvatarController {
  constructor(
    private updateAvatarCompetitorUseCase: UpdateAvatarCompetitorUseCase,
  ) {}

  @Patch(':id/upload')
  @UseInterceptors(FileInterceptor('file'))
  async updateAvatar(
    @Param() params: { id: string },
    @UploadedFile()
    file: FileDTO,
  ) {
    try {
      await this.updateAvatarCompetitorUseCase.execute({
        params: params,
        file,
      });
    } catch (error) {
      error.message;
    }
  }
}
