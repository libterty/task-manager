import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskStatus } from './task-status.enum';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository) private taskRepository: TaskRepository,
  ) {}

  async getTasks(filterDto: GetTasksFilterDto): Promise<object> {
    const result = await this.taskRepository.getTasks(filterDto);
    if (!result) {
      throw new NotFoundException(`Task with query "${filterDto}" not found`);
    }
    return { statusCode: 200, success: 'find', result };
  }

  async getTaskById(id: number): Promise<object> {
    const result = await this.taskRepository.findOne(id);
    if (!result) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    return { statusCode: 200, success: `find "${id}" success`, result };
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<object> {
    const result = await this.taskRepository.createTask(createTaskDto);
    if (!result) {
      throw new NotFoundException(`Task not created`);
    }
    return { statusCode: 201, success: 'create', result };
  }

  async updateTaskStatus(id: number, status: TaskStatus): Promise<object> {
    const task = await this.taskRepository.findOne(id);
    task.status = status;
    await task.save();
    return { statusCode: 200, success: 'update', task };
  }

  async deleteTaskById(id: number): Promise<object> {
    const result = await this.taskRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    return {
      statusCode: 200,
      success: 'delete',
      message: `Task with ID "${id}" deleted`,
    };
  }
}
