import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { RegisterCompetitorUseCase } from 'src/app/use-cases/register-competitor-use-case';
import { RegisterCompetitorsController } from './controllers/competitors.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [RegisterCompetitorsController],
  providers: [RegisterCompetitorUseCase],
})
export class HttpModule {}
