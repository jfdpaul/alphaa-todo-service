import { Todo as TodoDTO } from '@jfdpaul/alphaa-todo-dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from './todo.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Todo.name) private readonly model: Model<TodoDocument>,
  ) {}

  async getTodos(): Promise<Todo[]> {
    return await this.model.find().exec();
  }

  async getTodo(id: string): Promise<Todo> {
    return await this.model.findById(id).exec();
  }

  async createTodo(createTodoDto: TodoDTO): Promise<Todo> {
    return await new this.model({
      ...createTodoDto,
      createdAt: new Date(),
    }).save();
  }

  async updateTodo(id: string, updateTodoDto: TodoDTO): Promise<Todo> {
    return await this.model.findByIdAndUpdate(id, updateTodoDto).exec();
  }

  async deleteTodo(id: string): Promise<Todo> {
    console.log(id);
    return await this.model.findByIdAndDelete(id).exec();
  }
}
