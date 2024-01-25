import { Competitor } from 'src/app/entities/competitor';
import { Reward } from 'src/app/entities/reward';

export class CompetitorViewModel {
  static toHTTP(competitor: Competitor, reward: Reward) {
    return {
      id: competitor.id,
      name: competitor.name,
      surname: competitor.surname,
      createdAt: competitor.createdAt,
      updatedAt: competitor.updatedAt,
      rewards: [
        {
          id: reward.id,
          description: reward.description,
          rewardedAt: reward.rewardedAt,
          categoryId: reward.categoryId,
          competitorId: reward.competitorId,
        },
      ],
    };
  }
}
