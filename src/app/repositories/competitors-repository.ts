import { Competitor } from '../entities/competitor';

export abstract class CompetitorsRepository {
  abstract create(competitor: Competitor): Promise<void>;
  abstract findByName(name: string): Promise<Competitor | null>;
}
