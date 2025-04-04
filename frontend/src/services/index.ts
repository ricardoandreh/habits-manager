import api from '@/plugins/axios'
import type { AxiosInstance } from 'axios';

export class BaseService {
    protected api: AxiosInstance = api

    protected async get<T>(endpoint: string): Promise<T> {
        try {
            const response = await this.api.get(endpoint);
            return response.data;
        } catch (error) {
            console.error('Error in BaseService.get:', error);
            throw error;
        }
    }

    protected async post<T>(endpoint: string, data: unknown): Promise<T> {
        try {
            const response = await this.api.post(endpoint, data);
            return response.data;
        } catch (error) {
            console.error('Error in BaseService.post:', error);
            throw error;
        }
    }

    protected async patch<T>(endpoint: string, data: unknown): Promise<T> {
        try {
            const response = await this.api.patch(endpoint, data);
            return response.data;
        } catch (error) {
            console.error('Error in BaseService.patch:', error);
            throw error;
        }
    }

    protected async delete<T>(endpoint: string): Promise<T> {
        try {
            const response = await this.api.delete(endpoint);
            return response.data;
        } catch (error) {
            console.error('Error in BaseService.delete:', error);
            throw error;
        }
    }
}
