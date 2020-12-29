import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'; //npm install @nestjs/typeorm
import { Product } from './entities/product.entity';


@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'dbfasi',
    entities: [Product],
    synchronize: true,
  }), TypeOrmModule.forFeature([Product])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
