import { Injectable } from '@nestjs/common';
import { Competitor } from 'src/app/entities/competitor';
import { CompetitorsRepository } from 'src/app/repositories/competitors-repository';
import { PrismaService } from '../prisma.service';
import { PrismaCompetitorMapper } from '../mappers/prisma-competitors-mapper';

@Injectable()
export class PrismaCompetitorsRepository implements CompetitorsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(competitor: Competitor) {
    const raw = PrismaCompetitorMapper.toPrisma(competitor);

    await this.prismaService.competitor.create({
      data: raw,
    });
  }

  async findById(id: string) {
    const competitor = await this.prismaService.competitor.findUnique({
      where: { id },
      include: {
        rewards: true,
      },
    });

    if (!competitor) {
      return null;
    }

    return PrismaCompetitorMapper.toDomain(competitor, competitor.rewards);
  }

  async findMany() {
    const competitorsList = await this.prismaService.competitor.findMany({
      include: {
        rewards: true,
      },
    });

    const competitors = competitorsList.map((competitor) => {
      return PrismaCompetitorMapper.toDomain(competitor, competitor.rewards);
    });

    return competitors;
  }

  async findManyOrderByScore() {
    const competitorsList = await this.prismaService.competitor.findMany({
      orderBy: [
        {
          score: 'desc',
        },
      ],
    });

    const competitors = competitorsList.map((competitor) => {
      return PrismaCompetitorMapper.toDomain(competitor);
    });

    return competitors;
  }

  async save(competitor: Competitor) {
    const raw = PrismaCompetitorMapper.toPrisma(competitor);

    console.log(raw);

    const updatedCompetitor = await this.prismaService.competitor.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });

    return PrismaCompetitorMapper.toDomain(updatedCompetitor);
  }

  async delete(competitor: Competitor) {
    await this.prismaService.competitor.delete({
      where: {
        id: competitor.id,
      },
    });
  }
}
