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

  async findByName(name: string) {
    const competitor = await this.prismaService.competitor.findUnique({
      where: {
        name,
      },
    });

    if (!competitor) {
      return null;
    }

    return PrismaCompetitorMapper.toDomain(competitor);
  }
}