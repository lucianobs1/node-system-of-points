import { randomUUID } from 'node:crypto';
import { Replace } from 'src/helpers/Replace';

export interface CategoryProps {
  description: string;
  points: number;
  money: number;
  createdAt: Date;
  updatedAt?: Date | null;
}

export class Category {
  private _id: string;
  private props: CategoryProps;

  constructor(
    props: Replace<CategoryProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public get points() {
    return this.props.points;
  }

  public get description() {
    return this.props.description;
  }

  public get money() {
    return this.props.money;
  }

  public get createdAt() {
    return this.props.createdAt;
  }

  public get updatedAt() {
    return this.props.updatedAt;
  }

  public set description(description: string) {
    this.props.description = description;
  }

  public set points(points: number) {
    this.props.points = points;
  }

  public set money(money: number) {
    this.props.money = money;
  }

  public updated() {
    this.props.updatedAt = new Date();
  }
}
