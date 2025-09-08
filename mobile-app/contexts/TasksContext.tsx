import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { Task, TaskFormData, TaskStatus } from '../types/Task';
import { mockTasks } from '../data/mockTasks';
import { TasksStorageManager } from '../utils/fileSystem';

interface TasksContextType {
  tasks: Task[];
  isLoading: boolean;
  addTask: (taskData: TaskFormData) => Promise<void>;
  updateTask: (id: string, taskData: Partial<TaskFormData>) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  toggleTaskStatus: (id: string) => Promise<void>;
  searchTasks: (query: string) => Task[];
  clearTasks: () => Promise<void>;
}

const TasksContext = createContext<TasksContextType | undefined>(undefined);

interface TasksProviderProps {
  children: ReactNode;
}

export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [isLoading, setIsLoading] = useState(false);

  // Load tasks from storage on mount
  useEffect(() => {
    loadTasksFromStorage();
  }, []);

  const loadTasksFromStorage = async () => {
    try {
      setIsLoading(true);
      const storedTasks = await TasksStorageManager.readTasks();
      if (storedTasks.length > 0) {
        setTasks(storedTasks);
      } else {
        // If no stored tasks, initialize with mock data and save it
        await TasksStorageManager.writeTasks(mockTasks);
        setTasks(mockTasks);
      }
    } catch (error) {
      console.error('Error loading tasks from storage:', error);
      // Fallback to mock data if storage fails
      setTasks(mockTasks);
    } finally {
      setIsLoading(false);
    }
  };

  const saveTasksToStorage = async (newTasks: Task[]) => {
    try {
      await TasksStorageManager.writeTasks(newTasks);
    } catch (error) {
      console.error('Error saving tasks to storage:', error);
      throw error;
    }
  };

  const addTask = useCallback(async (taskData: TaskFormData) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title: taskData.title,
      description: taskData.description,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    setTasks(prevTasks => {
      const newTasks = [newTask, ...prevTasks];
      // Save to storage asynchronously without blocking state update
      saveTasksToStorage(newTasks).catch(error => {
        console.error('Error saving tasks to storage:', error);
      });
      return newTasks;
    });
  }, []);

  const updateTask = useCallback(async (id: string, taskData: Partial<TaskFormData>) => {
    setTasks(prevTasks => {
      const newTasks = prevTasks.map(task =>
        task.id === id
          ? {
              ...task,
              ...taskData,
              updatedAt: new Date(),
            }
          : task
      );
      // Save to storage asynchronously without blocking state update
      saveTasksToStorage(newTasks).catch(error => {
        console.error('Error saving tasks to storage:', error);
      });
      return newTasks;
    });
  }, []);

  const deleteTask = useCallback(async (id: string) => {
    setTasks(prevTasks => {
      const newTasks = prevTasks.filter(task => task.id !== id);
      // Save to storage asynchronously without blocking state update
      saveTasksToStorage(newTasks).catch(error => {
        console.error('Error saving tasks to storage:', error);
      });
      return newTasks;
    });
  }, []);

  const toggleTaskStatus = useCallback(async (id: string) => {
    setTasks(prevTasks => {
      const newTasks = prevTasks.map(task =>
        task.id === id
          ? {
              ...task,
              status: (task.status === 'pending' ? 'completed' : 'pending') as TaskStatus,
              updatedAt: new Date(),
            }
          : task
      );
      // Save to storage asynchronously without blocking state update
      saveTasksToStorage(newTasks).catch(error => {
        console.error('Error saving tasks to storage:', error);
      });
      return newTasks;
    });
  }, []);

  const searchTasks = useCallback((query: string): Task[] => {
    if (!query.trim()) return tasks;
    
    const lowercaseQuery = query.toLowerCase();
    return tasks.filter(task =>
      task.title.toLowerCase().includes(lowercaseQuery) ||
      task.description.toLowerCase().includes(lowercaseQuery)
    );
  }, [tasks]);

  const clearTasks = useCallback(async () => {
    try {
      await TasksStorageManager.clearTasks();
      setTasks([]);
    } catch (error) {
      console.error('Error clearing tasks:', error);
      throw error;
    }
  }, []);

  const value: TasksContextType = {
    tasks,
    isLoading,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskStatus,
    searchTasks,
    clearTasks,
  };

  return (
    <TasksContext.Provider value={value}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = (): TasksContextType => {
  const context = useContext(TasksContext);
  if (context === undefined) {
    throw new Error('useTasks must be used within a TasksProvider');
  }
  return context;
};
