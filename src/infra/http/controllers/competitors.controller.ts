import {
  Body,
  Controller,
  HttpCode,
  Param,
  Patch,
  Post,
  Response,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RegisterCompetitorUseCase } from 'src/app/use-cases/register-competitor-use-case';
import { CreateRegisterCompetitorDTO } from '../dtos/create-register-competitor-body-dto';
import { UpdateAvatarCompetitorUseCase } from 'src/app/use-cases/update-avatar-competitor-use-case';

@Controller('competitors')
export class CompetitorsController {
  constructor(
    private registerCompetitorUseCase: RegisterCompetitorUseCase,
    private updateAvatarCompetitorUseCase: UpdateAvatarCompetitorUseCase,
  ) {}

  @Post()
  @HttpCode(200)
  async create(@Body() body: CreateRegisterCompetitorDTO, @Response() res) {
    try {
      const { name } = body;

      await this.registerCompetitorUseCase.execute({
        name,
      });
    } catch (error) {
      return res.json({
        message: error.message,
      });
    }
  }

  @Patch(':id/upload')
  @UseInterceptors(FileInterceptor('file'))
  async createPost(
    @Param() params: { id: string },
    @UploadedFile() file: Express.Multer.File,
  ) {
    try {
      return await this.updateAvatarCompetitorUseCase.execute({
        params: params,
        file: file,
      });
    } catch (error) {
      error.message;
    }
  }
}
