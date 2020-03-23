"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const task_repository_1 = require("./task.repository");
const typeorm_1 = require("@nestjs/typeorm");
let TasksService = class TasksService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async getTasks(filterDto, user) {
        const result = await this.taskRepository.getTasks(filterDto, user);
        if (!result) {
            throw new common_1.NotFoundException(`Task with query "${filterDto}" not found`);
        }
        return result;
    }
    async getTaskById(id, user) {
        const result = await this.taskRepository.findOne({
            where: { id, userId: user.id },
        });
        if (!result) {
            throw new common_1.NotFoundException(`Task with ID "${id}" not found`);
        }
        return result;
    }
    async createTask(createTaskDto, user) {
        const result = await this.taskRepository.createTask(createTaskDto, user);
        if (!result) {
            throw new common_1.NotFoundException(`Task not created`);
        }
        return result;
    }
    async updateTaskStatus(id, status, user) {
        const task = await this.taskRepository.findOne({
            where: { id, userId: user.id },
        });
        task.status = status;
        try {
            await task.save();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`message: ${error}`);
        }
        return task;
    }
    async deleteTaskById(id, user) {
        const result = await this.taskRepository.delete({ id, userId: user.id });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Task with ID "${id}" not found`);
        }
        return {
            statusCode: 200,
            success: 'delete',
            message: `Task with ID "${id}" deleted`,
        };
    }
};
TasksService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(task_repository_1.TaskRepository)),
    __metadata("design:paramtypes", [task_repository_1.TaskRepository])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map