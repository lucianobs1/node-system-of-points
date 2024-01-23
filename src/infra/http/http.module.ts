import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { RegisterCompetitorUseCase } from 'src/app/use-cases/register-competitor-use-case';
import { CompetitorsController } from './controllers/competitors.controller';
import { MulterModule } from '@nestjs/platform-express';
import { MulterConfig } from 'src/shared/multer.config';
import { UpdateAvatarCompetitorUseCase } from 'src/app/use-cases/update-avatar-competitor-use-case';

@Module({
  imports: [
    DatabaseModule,
    MulterModule.registerAsync({
      useClass: MulterConfig,
    }),
  ],
  controllers: [CompetitorsController],
  providers: [RegisterCompetitorUseCase, UpdateAvatarCompetitorUseCase],
})
export class HttpModule {}
