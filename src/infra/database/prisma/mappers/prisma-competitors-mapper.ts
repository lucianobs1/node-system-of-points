import { Competitor as RawCompetitor } from '@prisma/client';
import { Competitor } from 'src/app/entities/competitor';

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

  static toDomain(rawCompetitor: RawCompetitor): Competitor {
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
