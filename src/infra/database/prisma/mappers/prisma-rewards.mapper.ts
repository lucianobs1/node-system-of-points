import { Reward as RawReward } from '@prisma/client';
import { Reward } from 'src/app/entities/reward';

export class PrismaRewardMapper {
  static toPrisma(reward: Reward) {
    return {
      id: reward.id,
      categoryId: reward.categoryId,
      competitorId: reward.competitorId,
      description: reward.description,
      rewardedAt: reward.rewardedAt,
    };
  }

  static toDomain(rawReward: RawReward): Reward {
    return new Reward(
      {
        categoryId: rawReward.categoryId,
        competitorId: rawReward.competitorId,
        description: rawReward.description,
        rewardedAt: rawReward.rewardedAt,
      },
      rawReward.id,
    );
  }
}
