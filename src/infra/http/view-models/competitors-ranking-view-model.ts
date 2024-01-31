import { Competitor } from 'src/app/entities/competitor';

export class CompetitorsRankingViewModel {
  static toHTTP(competitor: Competitor) {
    return {
      id: competitor.id,
      name: competitor.name,
      surname: competitor.surname,
      score: competitor.score,
      wallet: competitor.wallet,
      avatar: competitor.avatar,
      createdAt: competitor.createdAt,
    };
  }
}
