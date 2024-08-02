import { ApiProperty } from "@nestjs/swagger";

// src/products/dto/create-product.dto.ts
export class CreateProductDto {
  @ApiProperty({example:'Product'})
  name: string;
  @ApiProperty({example:'product.jpg'})
  image: string;
  @ApiProperty({example:'100'})
  price: string;
  @ApiProperty({example:'Product description'})
  description: string;
  @ApiProperty({example:'Product model'})
  model: string;
  @ApiProperty({example:'Product brand'})
  brand: string;
}
