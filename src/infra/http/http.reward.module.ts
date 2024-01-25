import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { RewardsController } from './controllers/rewards.controller';
import { CreateRewardUseCase } from 'src/app/use-cases/create-reward-use-case';

@Module({
  imports: [DatabaseModule],
  controllers: [RewardsController],
  providers: [CreateRewardUseCase],
})
export class HttpRewardModule {}
