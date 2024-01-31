import {
  Competitor as RawCompetitor,
  Reward as RawReward,
} from '@prisma/client';

import { Competitor } from 'src/app/entities/competitor';
import { Reward } from 'src/app/entities/reward';

export class PrismaCompetitorMapper {
  static toPrisma(competitor: Competitor) {
    return {
      id: competitor.id,
      name: competitor.name,
      surname: competitor.surname,
      avatar: competitor.avatar,
      score: competitor.score,
      wallet: competitor.wallet,
      createdAt: competitor.createdAt,
      updatedAt: competitor.updatedAt,
    };
  }

  static toDomain(
    rawCompetitor: RawCompetitor,
    rewardsByCompetitor?: RawReward[],
  ): Competitor {
    if (rewardsByCompetitor) {
      return new Competitor(
        {
          name: rawCompetitor.name,
          surname: rawCompetitor.surname,
          avatar: rawCompetitor.avatar,
          score: rawCompetitor.score,
          wallet: rawCompetitor.wallet,
          createdAt: rawCompetitor.createdAt,
          updatedAt: rawCompetitor.updatedAt,
          rewards: rewardsByCompetitor.map(
            (rewardByCompetitor) =>
              new Reward(
                {
                  description: rewardByCompetitor.description,
                  rewardedAt: rewardByCompetitor.rewardedAt,
                  categoryId: rewardByCompetitor.categoryId,
                  competitorId: rewardByCompetitor.competitorId,
                },
                rewardByCompetitor.id,
              ),
          ),
        },
        rawCompetitor.id,
      );
    } else {
      return new Competitor(
        {
          name: rawCompetitor.name,
          surname: rawCompetitor.surname,
          avatar: rawCompetitor.avatar,
          score: rawCompetitor.score,
          createdAt: rawCompetitor.createdAt,
          updatedAt: rawCompetitor.updatedAt,
        },
        rawCompetitor.id,
      );
    }
  }
}
