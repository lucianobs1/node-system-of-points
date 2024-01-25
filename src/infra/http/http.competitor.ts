import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { MulterModule } from '@nestjs/platform-express';
import { MulterConfig } from 'src/shared/multer.config';
import { MulterStorageProvider } from 'src/shared/multer-storage-provider';
import { IStorageProvider } from 'src/shared/storage-provider';
import { CompetitorAvatarController } from './controllers/competitors.avatar.controller';
import { CompetitorsController } from './controllers/competitors.controller';
import { UpdateAvatarCompetitorUseCase } from 'src/app/use-cases/update-avatar-competitor-use-case';
import { UpdateCompetitorUseCase } from 'src/app/use-cases/update-competitor-use-case';
import { CreateCompetitorUseCase } from 'src/app/use-cases/create-competitor-use-case';
import { GetCompetitorsUseCase } from 'src/app/use-cases/get-competitors-use-case';
import { GetCompetitorInfosUseCase } from 'src/app/use-cases/get-competitor-infos';
import { DeleteCompetitorUseCase } from 'src/app/use-cases/delete-competitor-use-case';

@Module({
  imports: [
    DatabaseModule,
    MulterModule.registerAsync({
      useClass: MulterConfig,
    }),
  ],
  controllers: [CompetitorsController, CompetitorAvatarController],
  providers: [
    CreateCompetitorUseCase,
    UpdateCompetitorUseCase,
    UpdateAvatarCompetitorUseCase,
    GetCompetitorsUseCase,
    GetCompetitorInfosUseCase,
    DeleteCompetitorUseCase,
    {
      provide: IStorageProvider,
      useClass: MulterStorageProvider,
    },
  ],
})
export class HttpCompetitor {}
