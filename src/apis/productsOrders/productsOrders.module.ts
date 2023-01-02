import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartService } from '../cart/cart.service';
import { Point } from '../points/entities/point.entity';
import { Product } from '../products/entities/product.entity';
import { User } from '../users/entities/user.entity';
import { ProductOrder } from './entities/productOrder.entity';
import { ProductsOrdersResolver } from './productsOrders.resolver';
import { ProductsOrdersService } from './productsOrders.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductOrder, //
      Product,
      User,
      Point,
    ]),
  ],
  providers: [
    ProductsOrdersResolver, //
    ProductsOrdersService,
    CartService,
  ],
})
export class ProductsOrdersModule {}
