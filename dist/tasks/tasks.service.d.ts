import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { TaskStatus } from './task-status.enum';
import { User } from '../auth/user.entity';
export declare class TasksService {
    private taskRepository;
    constructor(taskRepository: TaskRepository);
    getTasks(filterDto: GetTasksFilterDto, user: User): Promise<object>;
    getTaskById(id: number, user: User): Promise<object>;
    createTask(createTaskDto: CreateTaskDto, user: User): Promise<object>;
    updateTaskStatus(id: number, status: TaskStatus, user: User): Promise<object>;
    deleteTaskById(id: number, user: User): Promise<object>;
}
