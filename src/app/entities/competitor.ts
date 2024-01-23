import { randomUUID } from 'node:crypto';
import { Replace } from 'src/helpers/Replace';

export interface CompetitorProps {
  name: string;
  avatar?: string;
  createdAt?: Date;
  updatedAt?: Date | null;
}

export class Competitor {
  private _id: string;
  private props: CompetitorProps;

  constructor(
    props: Replace<CompetitorProps, { createdAt?: Date }>,
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

  public get name() {
    return this.props.name;
  }

  public get avatar() {
    return this.props.avatar;
  }

  public get createdAt() {
    return this.props.createdAt;
  }

  public get updatedAt() {
    return this.props.updatedAt;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public set avatar(avatar: string) {
    this.props.avatar = avatar;
  }
}
