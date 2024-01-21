import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { RegisterCompetitorUseCase } from 'src/app/use-cases/register-competitor-use-case';
import { CreateRegisterCompetitorDTO } from '../dtos/create-register-competitor-body-dto';
import { HttpCompetitorAlreadyExistsError } from './errors/http-competitor-already-exists-error';

@Controller('competitors')
export class RegisterCompetitorsController {
  constructor(private registerCompetitorUseCase: RegisterCompetitorUseCase) {}

  @Post()
  @HttpCode(200)
  async create(@Body() body: CreateRegisterCompetitorDTO) {
    try {
      const { name } = body;

      await this.registerCompetitorUseCase.execute({
        name,
      });
    } catch (error) {
      HttpCompetitorAlreadyExistsError.customError(error);
    }
  }
}
