import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaCompetitorsRepository } from './prisma/repositories/prisma-competitor-repository';
import { CompetitorsRepository } from 'src/app/repositories/competitors-repository';
import { CategoriesRepository } from 'src/app/repositories/categories-repository';
import { PrismaCategoriesRepository } from './prisma/repositories/prisma-categories-repository';
import { RewardsRepository } from 'src/app/repositories/rewards-repository';
import { PrismaRewardsRepository } from './prisma/repositories/prisma-rewards-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: CompetitorsRepository,
      useClass: PrismaCompetitorsRepository,
    },
    {
      provide: CategoriesRepository,
      useClass: PrismaCategoriesRepository,
    },
    {
      provide: RewardsRepository,
      useClass: PrismaRewardsRepository,
    },
  ],
  exports: [CompetitorsRepository, CategoriesRepository, RewardsRepository],
})
export class DatabaseModule {}
