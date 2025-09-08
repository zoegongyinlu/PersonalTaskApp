/**
 * Add task new screen
 */
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { TaskForm } from '../components/TaskForm';
import { useTasks } from '../hooks/useTasks';
import { TaskFormData } from '../types/Task';

export default function AddTaskScreen() {
    const router = useRouter();
    const { addTask } = useTasks();
  
    const handleSubmit = (data: TaskFormData): void => {
      addTask(data);
      router.push('/tabs');
    };
  
    const handleCancel = (): void => {
      router.push('/tabs');
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <TaskForm
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          isEditing={false}
        />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f9fa',
    },
  });