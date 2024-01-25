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
      createdAt: competitor.createdAt,
      updatedAt: competitor.updatedAt,
    };
  }

  static toDomain(
    rawCompetitor: RawCompetitor,
    rawReward?: RawReward,
  ): Competitor {
    return new Competitor(
      {
        name: rawCompetitor.name,
        surname: rawCompetitor.surname,
        avatar: rawCompetitor.avatar,
        score: rawCompetitor.score,
        createdAt: rawCompetitor.createdAt,
        updatedAt: rawCompetitor.updatedAt,
        rewards: [
          new Reward(
            {
              description: rawReward.description,
              rewardedAt: rawReward.rewardedAt,
              categoryId: rawReward.categoryId,
              competitorId: rawReward.competitorId,
            },
            rawReward.id,
          ),
        ],
      },
      rawCompetitor.id,
    );
  }
}
