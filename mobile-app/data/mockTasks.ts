import { Task } from '../types/Task';

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Complete project documentation',
    description: 'Write comprehensive README.md and update API documentation for the mobile app project.',
    status: 'pending',
    createdAt: new Date('2024-01-15T10:00:00Z'),
    updatedAt: new Date('2024-01-15T10:00:00Z'),
  },
  {
    id: '2',
    title: 'Review code quality',
    description: 'Conduct code review for the task management components and ensure TypeScript best practices.',
    status: 'completed',
    createdAt: new Date('2024-01-14T14:30:00Z'),
    updatedAt: new Date('2024-01-16T09:15:00Z'),
  },
  {
    id: '3',
    title: 'Implement user authentication',
    description: 'Add login and registration functionality with secure token management.',
    status: 'pending',
    createdAt: new Date('2024-01-13T16:45:00Z'),
    updatedAt: new Date('2024-01-13T16:45:00Z'),
  },
  {
    id: '4',
    title: 'Design mobile UI components',
    description: 'Create reusable UI components with consistent styling and responsive design.',
    status: 'completed',
    createdAt: new Date('2024-01-12T11:20:00Z'),
    updatedAt: new Date('2024-01-15T13:30:00Z'),
  },
  {
    id: '5',
    title: 'Setup testing framework',
    description: 'Configure Jest and React Native Testing Library for unit and integration tests.',
    status: 'pending',
    createdAt: new Date('2024-01-11T09:00:00Z'),
    updatedAt: new Date('2024-01-11T09:00:00Z'),
  },
  {
    id: '6',
    title: 'Optimize app performance',
    description: 'Implement lazy loading, memoization, and other performance optimizations.',
    status: 'pending',
    createdAt: new Date('2024-01-10T15:30:00Z'),
    updatedAt: new Date('2024-01-10T15:30:00Z'),
  },
];