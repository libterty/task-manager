import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatus } from './task-status.enum';
import { User } from '../auth/user.entity';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(filterDto: GetTasksFilterDto, user: User): Promise<object>;
    getTaskById(id: number, user: User): Promise<object>;
    createTask(createTaskDto: CreateTaskDto, user: User): Promise<object>;
    updateTaskById(id: number, status: TaskStatus, user: User): Promise<object>;
    deleteTaskById(id: number, user: User): Promise<object>;
}
