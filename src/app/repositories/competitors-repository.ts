import { Competitor } from '../entities/competitor';

export abstract class CompetitorsRepository {
  abstract create(competitor: Competitor): Promise<void>;
  abstract findById(id: string): Promise<Competitor | null>;
  abstract findMany(): Promise<Competitor[]>;
  abstract findManyOrderByScore(): Promise<Competitor[]>;
  abstract save(competitor: Competitor): Promise<Competitor>;
  abstract delete(competitor: Competitor): Promise<void>;
}
