import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { AppState, AppStateStatus } from 'react-native';
import { TasksStorageManager } from '../utils/fileSystem';
import { TasksProvider } from '../contexts/TasksContext';

export default function RootLayout() {
  useEffect(() => {
    const handleAppStateChange = async (nextAppState: AppStateStatus) => {
      // Clear tasks when app is going to background or inactive
      // This handles cases where the app is being terminated
      if (nextAppState === 'background' || nextAppState === 'inactive') {
        try {
          await TasksStorageManager.clearTasks();
          console.log('Tasks cleared on app state change to:', nextAppState);
        } catch (error) {
          console.error('Error clearing tasks on app state change:', error);
        }
      }
    };

    // Listen for app state changes
    const subscription = AppState.addEventListener('change', handleAppStateChange);

    // Cleanup function to clear tasks when component unmounts
    const cleanup = async () => {
      try {
        await TasksStorageManager.clearTasks();
        console.log('Tasks cleared on app unmount');
      } catch (error) {
        console.error('Error clearing tasks on app unmount:', error);
      }
    };

    // Return cleanup function
    return () => {
      subscription?.remove();
      cleanup();
    };
  }, []);

  return (
    <TasksProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTintColor: '#333',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="add-task"
          options={{
            title: 'Add Task',
            headerShown: true,
            presentation: 'modal',
          }}
        />
        <Stack.Screen 
          name="edit-task"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="task-details"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </TasksProvider>
  );
}