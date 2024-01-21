export class CompetitorAlreadyExistsError extends Error {
  constructor() {
    super('Competitor already exists');
  }
}
