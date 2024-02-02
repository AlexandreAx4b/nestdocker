import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GatosModule } from './gatos/gatos.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://teste:1a2b3c@cluster0.juc0oyi.mongodb.net/teste?retryWrites=true&w=majority'), GatosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
