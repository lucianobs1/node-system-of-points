import { Body, Controller, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CreateCompetitorDTO } from '../dtos/create-competitor-dto';
import { UpdateCompetitorDTO } from '../dtos/update-competitor-dto';
import { UpdateCompetitorUseCase } from 'src/app/use-cases/update-competitor-use-case';
import { CreateCompetitorUseCase } from 'src/app/use-cases/create-competitor-use-case';

@Controller('competitors')
export class CompetitorsController {
  constructor(
    private createCompetitorUseCase: CreateCompetitorUseCase,
    private updateCompetitorUseCase: UpdateCompetitorUseCase,
  ) {}

  @Post()
  @HttpCode(200)
  async create(@Body() body: CreateCompetitorDTO) {
    try {
      const { name } = body;

      await this.createCompetitorUseCase.execute({
        name,
      });
    } catch (error) {
      return error.message;
    }
  }

  @Put(':id/update')
  @HttpCode(202)
  async update(@Param('id') id: string, @Body() body: UpdateCompetitorDTO) {
    try {
      const { name } = body;

      const competitor = await this.updateCompetitorUseCase.execute({
        id,
        name,
      });

      return competitor;
    } catch (error) {
      return error.message;
    }
  }
}
