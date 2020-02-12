import { Task, TaskStatus } from './task.model';
import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid/v4';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  // init a getAllTasks for testing, will changing it to get data from RDBMS
  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(title: string, description: string): Task {
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }
}
