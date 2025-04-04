import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import type { ITask, ITaskState } from "@/types/taskType";
import { TaskService } from "@/services/taskService";

export const useTaskStore = defineStore("task", () => {
  const taskService = new TaskService();

  const state: ITaskState = reactive({
    loading: false,
    tasks: [ { "title": "Teste", "time": "12:03", "location": "asdfasdf", "duration": "1234", "icon": { "label": "Academia", "value": "mdi-dumbbell" }, "color": "#000000", "completed": false, "id": "", "type": "ActiveMind" }, { "title": "asdfasdf", "time": "12:34", "location": "mdi-walk", "duration": "Mente Ativa e Criativa", "icon": { "label": "Trabalho", "value": "mdi-briefcase" }, "color": "#FF0000", "completed": false, "id": "", "type": "Movement" }, { "title": "qwerqw", "time": "23:04", "location": "qwer", "duration": "qwer", "icon": { "label": "Caminhada", "value": "mdi-walk" }, "color": "#FFFFFF26", "completed": false, "id": "", "type": "Recharge" }, { "title": "casa", "time": "23:04", "location": "qwerqwe", "duration": "qwer", "icon": { "label": "Meditar", "value": "mdi-yoga" }, "color": "#9FA5708D", "completed": false, "id": "", "type": "Recharge" }, { "title": "qwerqwer", "time": "21:34", "location": "qwer", "duration": "qw", "icon": { "label": "Caminhada", "value": "mdi-walk" }, "color": "#000000", "completed": false, "id": "", "type": "Recharge" }, { "title": "Teste", "time": "12:03", "location": "asdfasdf", "duration": "1234", "icon": { "label": "Academia", "value": "mdi-dumbbell" }, "color": "#000000", "completed": false, "id": "", "type": "ActiveMind" }, { "title": "asdfasdf", "time": "12:34", "location": "mdi-walk", "duration": "Mente Ativa e Criativa", "icon": { "label": "Trabalho", "value": "mdi-briefcase" }, "color": "#FF0000", "completed": false, "id": "", "type": "Movement" }, { "title": "qwerqw", "time": "23:04", "location": "qwer", "duration": "qwer", "icon": { "label": "Caminhada", "value": "mdi-walk" }, "color": "#FFFFFF26", "completed": false, "id": "", "type": "Recharge" }, { "title": "casa", "time": "23:04", "location": "qwerqwe", "duration": "qwer", "icon": { "label": "Meditar", "value": "mdi-yoga" }, "color": "#9FA5708D", "completed": false, "id": "", "type": "Recharge" }, { "title": "qwerqwer", "time": "21:34", "location": "qwer", "duration": "qw", "icon": { "label": "Caminhada", "value": "mdi-walk" }, "color": "#000000", "completed": false, "id": "", "type": "Recharge" }  ],
    progress: [
      { title: "Movimento e Vitalidade", value: 20,type: 'Movement', color: "light-green" },
      { title: "Mente Ativa e Criativa", value: 0,type: 'ActiveMind', color: "light-blue-lighten-3" },
      { title: "Recarga e Renovação", value: 0,type: 'Recharge', color: "deep-purple-accent-1" },
    ],
    error: null,
  });

  const isLoading = computed(() => state.loading);
  const tasks = computed(() => state.tasks);
  const error = computed(() => state.error);
  const completedTasks = computed(() =>
    state.tasks.filter((task) => task.completed)
  );
  const incompletedTasks = computed(() =>
    state.tasks.filter((task) => !task.completed)
  );
  const progress = computed(() => {
    return state.progress.map((progressItem) => {
      const completedTasks = state.tasks.filter(
        (task) => task.completed && task.type === progressItem.type
      ).length;
      const totalTasks = state.tasks.filter(
        (task) => task.type === progressItem.type
      ).length;
      const value = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
      return { ...progressItem, value };
    });
  });

  const setLoading = (loading: boolean) => {
    state.loading = loading;
  };

  const getTasks = async () => {
    setLoading(true);
    try {
      const response = await taskService.getTasks();
      state.tasks = response;
    } catch (err) {
      state.error = err;
    } finally {
      setLoading(false);
    }
  };

  const createTask = async (newTask: Omit<ITask, "id">) => {
    setLoading(true);
    try {
      const response = await taskService.createTask(newTask);
      state.tasks.push(response);
    } catch (err) {
      state.error = err;
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (task: ITask) => {
    setLoading(true);
    try {
      const response = await taskService.deleteTask(task.id.toString());
      state.tasks = response;
    } catch (err) {
      state.error = err;
    } finally {
      setLoading(false);
    }
  };

  const updateTask = async (oldTask: ITask, updatedTask: ITask) => {
    setLoading(true);
    try {
      const response = await taskService.updateTask(
        oldTask.id.toString(),
        updatedTask
      );
      const index = state.tasks.findIndex((task) => task.id === oldTask.id);
      if (index !== -1) {
        state.tasks[index] = response;
      }
    } catch (err) {
      state.error = err;
    } finally {
      setLoading(false);
    }
  };

  const getProgress = computed(() => {
    const totalTasks = state.tasks.length;
    const completedTasks = state.tasks.filter((task) => task.completed).length;
    return totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  });

  return {
    isLoading,
    tasks,
    error,
    progress,
    completedTasks,
    incompletedTasks,
    setLoading,
    getTasks,
    createTask,
    updateTask,
    deleteTask,
    getProgress,
  };
});
