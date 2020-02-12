import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

// all path goes to '/tasks' will come to this controller, due to Decorator that marks a class as a Nest controller
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }
}
