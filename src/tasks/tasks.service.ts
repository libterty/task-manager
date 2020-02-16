import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskStatus } from './task-status.enum';
import { User } from '../auth/user.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository) private taskRepository: TaskRepository,
  ) {}

  async getTasks(filterDto: GetTasksFilterDto, user: User): Promise<object> {
    const result = await this.taskRepository.getTasks(filterDto, user);
    if (!result) {
      throw new NotFoundException(`Task with query "${filterDto}" not found`);
    }
    return { statusCode: 200, success: 'find', result };
  }

  async getTaskById(id: number, user: User): Promise<object> {
    const result = await this.taskRepository.findOne({
      where: { id, userId: user.id },
    });
    if (!result) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    return { statusCode: 200, success: `find "${id}" success`, result };
  }

  async createTask(createTaskDto: CreateTaskDto, user: User): Promise<object> {
    const result = await this.taskRepository.createTask(createTaskDto, user);
    if (!result) {
      throw new NotFoundException(`Task not created`);
    }
    return { statusCode: 201, success: 'create', result };
  }

  async updateTaskStatus(
    id: number,
    status: TaskStatus,
    user: User,
  ): Promise<object> {
    const task = await this.taskRepository.findOne({
      where: { id, userId: user.id },
    });
    task.status = status;
    try {
      await task.save();
    } catch (error) {
      throw new InternalServerErrorException(`message: ${error}`);
    }
    return { statusCode: 200, success: 'update', task };
  }

  async deleteTaskById(id: number, user: User): Promise<object> {
    const result = await this.taskRepository.delete({ id, userId: user.id });
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
