import { Reward } from '../entities/reward';

export abstract class RewardsRepository {
  abstract create(reward: Reward): Promise<Reward>;
}
