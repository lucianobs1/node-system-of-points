import { Competitor } from 'src/app/entities/competitor';
import { Reward } from 'src/app/entities/reward';

export class CompetitorViewModel {
  static toHTTP(competitor: Competitor, rewardsByCompetitor?: Reward[]) {
    if (rewardsByCompetitor) {
      return {
        id: competitor.id,
        name: competitor.name,
        surname: competitor.surname,
        score: competitor.score,
        avatar: competitor.avatar,
        createdAt: competitor.createdAt,
        updatedAt: competitor.updatedAt,
        rewards: rewardsByCompetitor.map((rewardCompetitor) => {
          return {
            id: rewardCompetitor.id,
            description: rewardCompetitor.description,
            rewardedAt: rewardCompetitor.rewardedAt,
            categoryId: rewardCompetitor.categoryId,
          };
        }),
      };
    } else {
      return {
        id: competitor.id,
        name: competitor.name,
        surname: competitor.surname,
        score: competitor.score,
        avatar: competitor.avatar,
        createdAt: competitor.createdAt,
        updatedAt: competitor.updatedAt,
        rewards: [],
      };
    }
  }
}
