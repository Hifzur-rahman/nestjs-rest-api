import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';

console.log(" --- connection ")

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://dbUser:rw8SE7ZNSRjHE0Ri@cluster0.5yuzx.mongodb.net/nestjs-user?retryWrites=true&w=majority'), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
