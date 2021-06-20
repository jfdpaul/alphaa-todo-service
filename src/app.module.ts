import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './todo.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.DB_URL ||
        'mongodb+srv://root:MyPrCIp3odNHEWGV@alphaa-todo-dev-test.vjkqv.mongodb.net/alphaa-todos?authSource=admin&replicaSet=atlas-h2qjon-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true',
    ),
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
