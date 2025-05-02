import { Injectable } from '@nestjs/common';
import { UserType } from 'src/routes/auth/auth.model';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class SharedUserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findUnique(
    uniqueObject: { id: number } | { email: string },
  ): Promise<UserType | null> {
    return this.prismaService.user.findUnique({
      where: uniqueObject,
    });
  }
}
