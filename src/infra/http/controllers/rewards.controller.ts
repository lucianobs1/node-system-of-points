import { Body, Controller, Post } from '@nestjs/common';
import { CreateRewardDTO } from '../dtos/create-reward-dto';
import { CreateRewardUseCase } from 'src/app/use-cases/create-reward-use-case';

@Controller('rewards')
export class RewardsController {
  constructor(private createRewardUseCase: CreateRewardUseCase) {}

  @Post()
  async createReward(@Body() body: CreateRewardDTO) {
    try {
      await this.createRewardUseCase.execute(body);
    } catch (error) {
      return error.message;
    }
  }
}
