import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from '../types/Task';

// Storage utility to manage tasks with AsyncStorage
export class TasksStorageManager {
  private static readonly STORAGE_KEY = 'persisted_tasks';

  // Read tasks from AsyncStorage
  static async readTasks(): Promise<Task[]> {
    try {
      const storedTasks = await AsyncStorage.getItem(this.STORAGE_KEY);
      if (storedTasks) {
        const tasks = JSON.parse(storedTasks);
        // Convert date strings back to Date objects
        return tasks.map((task: any) => ({
          ...task,
          createdAt: new Date(task.createdAt),
          updatedAt: new Date(task.updatedAt),
        }));
      }
      return [];
    } catch (error) {
      console.error('Error reading tasks from storage:', error);
      return [];
    }
  }

  // Write tasks to AsyncStorage
  static async writeTasks(tasks: Task[]): Promise<void> {
    try {
      await AsyncStorage.setItem(this.STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error('Error writing tasks to storage:', error);
      throw error;
    }
  }

  // Clear all tasks from storage
  static async clearTasks(): Promise<void> {
    try {
      await AsyncStorage.removeItem(this.STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing tasks from storage:', error);
      throw error;
    }
  }
}
