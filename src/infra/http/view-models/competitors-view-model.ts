import { Competitor } from 'src/app/entities/competitor';
import { Reward } from 'src/app/entities/reward';

export class CompetitorViewModel {
  static toHTTP(competitor: Competitor, rewardsByCompetitor?: Reward[]) {
    if (rewardsByCompetitor) {
      return {
        id: competitor.id,
        name: competitor.name,
        surname: competitor.surname,
        createdAt: competitor.createdAt,
        updatedAt: competitor.updatedAt,
        rewards: rewardsByCompetitor.map(
          (rewardByCompetitor) => rewardByCompetitor,
        ),
      };
    } else {
      return {
        id: competitor.id,
        name: competitor.name,
        surname: competitor.surname,
        createdAt: competitor.createdAt,
        updatedAt: competitor.updatedAt,
        rewards: [],
      };
    }
  }
}
