import { Competitor as RawCompetitor } from '@prisma/client';
import { Competitor } from 'src/app/entities/competitor';

export class PrismaCompetitorMapper {
  static toPrisma(competitor: Competitor) {
    return {
      id: competitor.id,
      name: competitor.name,
      createdAt: competitor.createdAt,
      updatedAt: competitor.updatedAt,
    };
  }

  static toDomain(rawCompetitor: RawCompetitor): Competitor {
    return new Competitor({
      name: rawCompetitor.name,
      createdAt: rawCompetitor.createdAt,
      updatedAt: rawCompetitor.updatedAt,
    });
  }
}