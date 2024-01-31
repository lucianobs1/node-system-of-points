import { Competitor } from 'src/app/entities/competitor';
import { Reward } from 'src/app/entities/reward';
import { RewardViewModel } from './reward-view-model';

export class CompetitorViewModel {
  static toHTTP(competitor: Competitor, rewardsByCompetitor?: Reward[]) {
    if (rewardsByCompetitor) {
      return {
        id: competitor.id,
        name: competitor.name,
        surname: competitor.surname,
        score: competitor.score,
        wallet: competitor.wallet,
        avatar: competitor.avatar,
        createdAt: competitor.createdAt,
        updatedAt: competitor.updatedAt,
        rewards: rewardsByCompetitor.map((reward) =>
          RewardViewModel.toHTTP(reward),
        ),
      };
    } else {
      return {
        id: competitor.id,
        name: competitor.name,
        surname: competitor.surname,
        score: competitor.score,
        wallet: competitor.wallet,
        avatar: competitor.avatar,
        createdAt: competitor.createdAt,
        updatedAt: competitor.updatedAt,
        rewards: [],
      };
    }
  }
}
