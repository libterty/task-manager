import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = ['test'];

  // init a getAllTasks for testing, will changing it to get data from RDBMS
  getAllTasks() {
    console.log('this.tasks', this.tasks);
    return this.tasks;
  }
}
