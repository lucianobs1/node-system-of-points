import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCompetitorDTO } from '../dtos/create-competitor-dto';
import { UpdateCompetitorDTO } from '../dtos/update-competitor-dto';
import { UpdateCompetitorUseCase } from 'src/app/use-cases/update-competitor-use-case';
import { CreateCompetitorUseCase } from 'src/app/use-cases/create-competitor-use-case';
import { GetCompetitorsUseCase } from 'src/app/use-cases/get-competitors-use-case';
import { GetCompetitorInfosUseCase } from 'src/app/use-cases/get-competitor-infos';
import { DeleteCompetitorUseCase } from 'src/app/use-cases/delete-competitor-use-case';

@Controller('competitors')
export class CompetitorsController {
  constructor(
    private createCompetitorUseCase: CreateCompetitorUseCase,
    private updateCompetitorUseCase: UpdateCompetitorUseCase,
    private getCompetitorsUseCase: GetCompetitorsUseCase,
    private getCompetitorInfosUseCase: GetCompetitorInfosUseCase,
    private deleteCompetitorUseCase: DeleteCompetitorUseCase,
  ) {}

  @Post()
  @HttpCode(200)
  async createCompetitor(@Body() body: CreateCompetitorDTO) {
    try {
      const { name, surname } = body;

      await this.createCompetitorUseCase.execute({
        name,
        surname,
      });
    } catch (error) {
      return error.message;
    }
  }

  @Put(':id/update')
  @HttpCode(202)
  async updateCompetitor(
    @Param('id') id: string,
    @Body() body: UpdateCompetitorDTO,
  ) {
    try {
      const { name, surname } = body;

      const competitor = await this.updateCompetitorUseCase.execute({
        id,
        name,
        surname,
      });

      return competitor;
    } catch (error) {
      return error.message;
    }
  }

  @Get()
  @HttpCode(202)
  async getCompetitors() {
    try {
      const competitors = await this.getCompetitorsUseCase.execute();

      return competitors;
    } catch (error) {
      return error.message;
    }
  }

  @Get(':id')
  @HttpCode(202)
  async getCompetitorInfos(@Param() params: { id: string }) {
    try {
      const competitors = await this.getCompetitorInfosUseCase.execute({
        params,
      });

      return competitors;
    } catch (error) {
      return error.message;
    }
  }

  @Delete(':id')
  @HttpCode(200)
  async deleteCompetitor(@Param() params: { id: string }) {
    try {
      const competitors = await this.deleteCompetitorUseCase.execute({
        params,
      });

      return competitors;
    } catch (error) {
      return error.message;
    }
  }
}
