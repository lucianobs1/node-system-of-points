import { Reward } from 'src/app/entities/reward';

export class RewardViewModel {
  static toHTTP(reward: Reward) {
    return {
      id: reward.id,
      description: reward.description,
      categoryId: reward.categoryId,
      rewardedAt: reward.rewardedAt,
    };
  }
}
