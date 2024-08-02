// src/products/products.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:true})
  createdAt: Date;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  price: string;

  @Column('text')
  description: string;

  @Column()
  model: string;

  @Column()
  brand: string;
}