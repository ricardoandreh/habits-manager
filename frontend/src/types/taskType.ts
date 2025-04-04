export interface ITask {
  id: string;
  title: string;
  time: string;
  location: string;
  duration: string;
  icon: {
    label: string,
    value: string, 
  }
  color: string;
  completed: boolean;
  type: 'Movement' | 'ActiveMind' | 'Recharge' | ''
}

interface IProgress {
  title: string;
  type: 'Movement' | 'ActiveMind' | 'Recharge' | ''
  value: number;
  color: string;
}

export interface ITaskState {
  loading: boolean;
  tasks: Array<ITask>;
  progress: Array<IProgress>;
  error: unknown;
};