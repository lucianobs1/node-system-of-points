import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PrismaCategoryMapper } from '../mappers/prisma-categories.mapper';
import { Category } from 'src/app/entities/category';
import { CategoriesRepository } from 'src/app/repositories/categories-repository';

@Injectable()
export class PrismaCategoriesRepository implements CategoriesRepository {
  constructor(private prismaService: PrismaService) {}

  async create(category: Category) {
    const raw = PrismaCategoryMapper.toPrisma(category);

    await this.prismaService.category.create({
      data: raw,
    });
  }

  async findMany() {
    const CategoriesList = await this.prismaService.category.findMany();

    const categories = CategoriesList.map((category) =>
      PrismaCategoryMapper.toDomain(category),
    );

    return categories;
  }
}
