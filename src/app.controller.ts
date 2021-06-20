import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Todo as TodoDTO } from '@jfdpaul/alphaa-todo-dto';

import { AppService } from './app.service';

@Controller('todos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getTodos() {
    return this.appService.getTodos();
  }

  @Get(':id')
  async getTodo(@Param('id') id: string) {
    return this.appService.getTodo(id);
  }

  @Post()
  createTodo(@Body() todoDTO: TodoDTO) {
    console.log(todoDTO);
    return this.appService.createTodo(todoDTO);
  }

  @Put(':id')
  async updateTodo(@Param('id') id: string, @Body() updateDTO: TodoDTO) {
    return this.appService.updateTodo(id, updateDTO);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string) {
    return this.appService.deleteTodo(id);
  }
}
