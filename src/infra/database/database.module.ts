import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaCompetitorsRepository } from './prisma/repositories/prisma-competitor-repository';
import { CompetitorsRepository } from 'src/app/repositories/competitors-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: CompetitorsRepository,
      useClass: PrismaCompetitorsRepository,
    },
  ],
  exports: [CompetitorsRepository],
})
export class DatabaseModule {}
