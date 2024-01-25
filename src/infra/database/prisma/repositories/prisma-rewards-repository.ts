import { Reward } from 'src/app/entities/reward';
import { RewardsRepository } from 'src/app/repositories/rewards-repository';
import { PrismaRewardMapper } from '../mappers/prisma-rewards.mapper';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaRewardsRepository implements RewardsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(reward: Reward) {
    const raw = PrismaRewardMapper.toPrisma(reward);

    const newReward = await this.prismaService.reward.create({
      data: raw,
    });

    return PrismaRewardMapper.toDomain(newReward);
  }
}
