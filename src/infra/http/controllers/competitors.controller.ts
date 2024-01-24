import {
  Body,
  Controller,
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

@Controller('competitors')
export class CompetitorsController {
  constructor(
    private createCompetitorUseCase: CreateCompetitorUseCase,
    private updateCompetitorUseCase: UpdateCompetitorUseCase,
    private getCompetitorsUseCase: GetCompetitorsUseCase,
  ) {}

  @Post()
  @HttpCode(200)
  async create(@Body() body: CreateCompetitorDTO) {
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
  async update(@Param('id') id: string, @Body() body: UpdateCompetitorDTO) {
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
  async get() {
    try {
      const competitors = await this.getCompetitorsUseCase.execute();

      return competitors;
    } catch (error) {
      return error.message;
    }
  }
}
