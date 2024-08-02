// src/products/products.controller.ts
import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity'; 
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  
  @Get()
  async getAllProducts(): Promise<Product[]> {
    return await this.productsService.getAllProducts();
  }

  @Get('fetch')
  async fetchDataFromExternalApi(): Promise<void> {
    await this.productsService.fetchDataFromExternalApi();
  }

  @Delete("delete")
  async deleteAllProducts(): Promise<void> {
    await this.productsService.deleteAllProducts();
  }

  @Post("post")
  async createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    console.log(createProductDto)
    return await this.productsService.createProduct(createProductDto);
  }


}
