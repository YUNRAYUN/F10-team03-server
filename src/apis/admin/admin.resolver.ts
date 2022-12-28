import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthAdminAccessGuard } from 'src/commons/auth/gql-auth-guard';
import { AdminService } from './admin.service';
import { CreateAdminInput } from './dto/create-admin.input';
import { Admin } from './entities/admin.entity';

@Resolver()
export class AdminResolver {
  constructor(
    private readonly adminService: AdminService, //
  ) {}

  @UseGuards(GqlAuthAdminAccessGuard)
  @Query(() => Admin)
  fetchAdminLoggedIn(@Context() context): Promise<Admin> {
    return this.adminService.findOneById({ id: context.req.user.id });
  }

  @Mutation(() => Admin)
  createAdmin(
    @Args('createAdminInput') createAdminInput: CreateAdminInput, //
  ): Promise<Admin> {
    return this.adminService.create({ createAdminInput });
  }

  @UseGuards(GqlAuthAdminAccessGuard)
  @Mutation(() => Boolean)
  deleteAdmin(@Context() context): Promise<boolean> {
    return this.adminService.delete({ context });
  }
}
