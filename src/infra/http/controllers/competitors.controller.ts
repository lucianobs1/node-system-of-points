import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { RegisterCompetitorUseCase } from 'src/app/use-cases/register-competitor-use-case';
import { CreateCompetitorDTO } from '../dtos/create-competitor-dto';

@Controller('competitors')
export class CompetitorsController {
  constructor(private registerCompetitorUseCase: RegisterCompetitorUseCase) {}

  @Post()
  @HttpCode(200)
  async create(@Body() body: CreateCompetitorDTO) {
    try {
      const { name } = body;

      await this.registerCompetitorUseCase.execute({
        name,
      });
    } catch (error) {
      return error.message;
    }
  }
}
