import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; //npm install @nestjs/type
import { Repository } from 'typeorm';   //npm install typeorm
import { Product } from './entities/product.entity'

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  getProducts(): Promise<any> {
    return this.productsRepository.find();
  }

  addProduct(obj:any):Promise<any> {
    return this.productsRepository.insert(obj);
  }

  deleteProduct(id:string):Promise<any>{
    return this.productsRepository.delete(id);
  }

}
