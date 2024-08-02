import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './modules/products/products.module';
import { ApiService } from './api/api.service';
import { Product } from './modules/products/entities/product.entity'; 


@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432, 
      username: 'root',
      password: 'password',
      database: 'product',
      entities: [Product],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ApiService],
})
export class AppModule {}
