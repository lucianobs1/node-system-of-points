import { HttpException, HttpStatus } from '@nestjs/common';
import { CompetitorAlreadyExistsError } from 'src/app/use-cases/errors/competitor-already-exists-error';

export class HttpCompetitorAlreadyExistsError extends Error {
  static customError(error: Error) {
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
    } else {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Internal Server Error',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }
}
