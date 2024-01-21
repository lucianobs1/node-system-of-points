import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { RegisterCompetitorUseCase } from 'src/app/use-cases/register-competitor-use-case';
import { CreateRegisterCompetitorDTO } from '../dtos/create-register-competitor-body-dto';
import { CompetitorAlreadyExistsError } from 'src/app/use-cases/errors/competitor-already-exists-error';

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
      if (error instanceof CompetitorAlreadyExistsError) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: new CompetitorAlreadyExistsError().message,
          },
          HttpStatus.BAD_REQUEST,
          {
            cause: error,
          },
        );
      }
    }
  }
}
