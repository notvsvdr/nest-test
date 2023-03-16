import { Controller, Get, Param, Post, Body, Redirect } from '@nestjs/common';
import { Delete } from '@nestjs/common/decorators';
import { ProductDTO } from '../products/products.dto';
import { ProductsService } from './product.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  getAll(): Promise<Product[]> {
    return this.productsService.getAll();
  }

  @Get(':id')
  get(@Param() params): Promise<Product> {
    return this.productsService.get(params.id);
  }

  @Post()
  create(@Body() productDTO: ProductDTO): Promise<Product> {
    return this.productsService.create(productDTO);
  }

  @Delete(':id')
  delete(@Param() params): Promise<Product> {
    return this.productsService.delete(params.id);
  }
}
