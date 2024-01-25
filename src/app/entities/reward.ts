import { randomUUID } from 'node:crypto';
import { Replace } from 'src/helpers/Replace';

export interface RewardProps {
  categoryId: string;
  competitorId: string;
  description: string;
  rewardedAt: Date;
}

export class Reward {
  private _id: string;
  private props: RewardProps;

  constructor(props: Replace<RewardProps, { rewardedAt?: Date }>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      rewardedAt: props.rewardedAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public get categoryId() {
    return this.props.categoryId;
  }

  public get competitorId() {
    return this.props.competitorId;
  }

  public get description() {
    return this.props.description;
  }

  public get rewardedAt() {
    return this.props.rewardedAt;
  }

  public set description(description: string) {
    this.props.description = description;
  }
}
