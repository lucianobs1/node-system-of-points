import { randomUUID } from 'node:crypto';
import { Replace } from 'src/helpers/Replace';

export interface CompetitorProps {
  name: string;
  surname: string;
  avatar?: string;
  score?: number;
  createdAt: Date;
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

  public get surname() {
    return this.props.surname;
  }

  public get avatar() {
    return this.props.avatar;
  }

  public get score() {
    return this.props.score;
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

  public set surname(surname: string) {
    this.props.surname = surname;
  }

  public set avatar(avatar: string) {
    this.props.avatar = avatar;
  }

  public set score(score: number) {
    this.props.score = score;
  }

  public updated() {
    this.props.updatedAt = new Date();
  }
}
