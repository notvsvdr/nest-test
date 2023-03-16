import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDTO } from './products.dto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductsService {
  // eslint-disable-next-line prettier/prettier
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

  async getAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async get(id: string): Promise<Product> {
    return this.productModel.findById(id);
  }

  async create(product: ProductDTO): Promise<Product> {
    const newProduct = new this.productModel(product);
    return newProduct.save();
  }
}
