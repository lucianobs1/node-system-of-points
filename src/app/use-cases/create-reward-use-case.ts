import { Injectable } from '@nestjs/common';
import { CompetitorsRepository } from '../repositories/competitors-repository';
import { CategoriesRepository } from '../repositories/categories-repository';
import { ResourceNotFoundError } from './errors/resource-not-found-error';
import { RewardsRepository } from '../repositories/rewards-repository';
import { Reward } from '../entities/reward';

interface CreateRewardRequest {
  description: string;
  categoryId: string;
  competitorId: string;
}

interface CreateRewardResponse {
  reward: Reward;
}

@Injectable()
export class CreateRewardUseCase {
  constructor(
    private rewardsRepository: RewardsRepository,
    private competitorsRepository: CompetitorsRepository,
    private categoriesRepository: CategoriesRepository,
  ) {}

  async execute({
    categoryId,
    competitorId,
    description,
  }: CreateRewardRequest): Promise<CreateRewardResponse> {
    const competitor = await this.competitorsRepository.findById(competitorId);

    if (!competitor) {
      throw new ResourceNotFoundError();
    }

    const category = await this.categoriesRepository.findById(categoryId);

    if (!category) {
      throw new ResourceNotFoundError();
    }

    const newReward = new Reward({
      categoryId,
      competitorId,
      description,
    });

    competitor.score += category.points;

    await this.competitorsRepository.save(competitor);

    const reward = await this.rewardsRepository.create(newReward);

    return { reward };
  }
}
