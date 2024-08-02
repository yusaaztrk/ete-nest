// src/products/products.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import axios from 'axios';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  // Dış API'den veri çeker ve veritabanına kaydeder
  async fetchDataFromExternalApi(): Promise<void> {
    const response = await axios.get('https://5fc9346b2af77700165ae514.mockapi.io/products/');
    const data = response.data;

    for (const item of data) {
      const entity = this.productRepository.create({
        createdAt: new Date(item.createdAt),
        name: item.name,
        image: item.image,
        price: item.price,
        description: item.description,
        model: item.model,
        brand: item.brand,
      });

      await this.productRepository.save(entity);
    }
  }

  // Tüm ürünleri döndürür
  async getAllProducts(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  // Tüm ürünleri siler
  async deleteAllProducts(): Promise<void> {
    await this.productRepository.clear();
  }

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productRepository.create(createProductDto);
    return await this.productRepository.save(product);
  }

}


