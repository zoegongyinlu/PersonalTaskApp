export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
}

export type TaskStatus = 'pending' | 'completed';

export interface TaskFormData {
  title: string;
  description: string;
}

export interface TaskContextType {
  tasks: Task[];
  addTask: (taskData: TaskFormData) => void;
  updateTask: (id: string, taskData: Partial<TaskFormData>) => void;
  deleteTask: (id: string) => void;
  toggleTaskStatus: (id: string) => void;
  searchTasks: (query: string) => Task[];
}