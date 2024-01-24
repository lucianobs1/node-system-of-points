import { Competitor } from '../entities/competitor';

export abstract class CompetitorsRepository {
  abstract create(competitor: Competitor): Promise<void>;
  abstract findById(id: string): Promise<Competitor | null>;
  abstract save(competitor: Competitor): Promise<void>;
}
