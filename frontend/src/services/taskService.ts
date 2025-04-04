import { BaseService } from '@/services/index';
import type { ITask } from '@/types/taskType';

export class TaskService extends BaseService {
    async getTasks(): Promise<ITask[]> {
        try {
            const data = await this.get<{ results: ITask[] }>('/tasks');
            return data.results;
        } catch (error) {
            console.error('Error in getTasks:', error);
            throw error;
        }
    }

    async createTask(newTask: Omit<ITask, "id">): Promise<ITask> {
        try {
            const data = await this.post<ITask>('/tasks/', newTask);
            return data;
        } catch (error) {
            console.error('Error in createTask:', error);
            throw error;
        }
    }

    async deleteTask(id: string): Promise<ITask[]> {
        try {
            const data = await this.delete<{ results: ITask[] }>(`/tasks/${id}/`);
            return data.results;
        } catch (error) {
            console.error('Error in deleteTask:', error);
            throw error;
        }
    }

    async updateTask(id: string, updatedTask: Partial<ITask>): Promise<ITask> {
        try {
            const data = await this.patch<ITask>(`/tasks/${id}/`, updatedTask);
            return data;
        } catch (error) {
            console.error('Error in updateTask:', error);
            throw error;
        }
    }
}
