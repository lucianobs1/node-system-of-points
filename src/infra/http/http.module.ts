import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { RegisterCompetitorUseCase } from 'src/app/use-cases/register-competitor-use-case';
import { CompetitorsController } from './controllers/competitors.controller';
import { MulterModule } from '@nestjs/platform-express';
import { MulterConfig } from 'src/shared/multer.config';
import { UpdateAvatarCompetitorUseCase } from 'src/app/use-cases/update-avatar-competitor-use-case';
import { CompetitorAvatarController } from './controllers/competitors.avatar.controller';
import { MulterStorageProvider } from 'src/shared/multer-storage-provider';
import { IStorageProvider } from 'src/shared/storage-provider';
import { UpdateCompetitorUseCase } from 'src/app/use-cases/update-competitor-use-case';

@Module({
  imports: [
    DatabaseModule,
    MulterModule.registerAsync({
      useClass: MulterConfig,
    }),
  ],
  controllers: [CompetitorsController, CompetitorAvatarController],
  providers: [
    RegisterCompetitorUseCase,
    UpdateCompetitorUseCase,
    UpdateAvatarCompetitorUseCase,
    {
      provide: IStorageProvider,
      useClass: MulterStorageProvider,
    },
  ],
})
export class HttpModule {}
