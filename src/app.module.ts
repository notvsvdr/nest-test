import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

const MONGODB_CONNECTION_URL =
  'mongodb+srv://notvsvdr:evvocHsbWanIDM9u@cluster0.g2oxtnl.mongodb.net/?retryWrites=true&w=majority';

@Module({
  imports: [
    ProductsModule,
    MongooseModule,
    MongooseModule.forRoot(MONGODB_CONNECTION_URL),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
