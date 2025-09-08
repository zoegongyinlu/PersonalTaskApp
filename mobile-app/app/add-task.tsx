import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { TaskForm } from '../components/TaskForm';
import { useTasks } from '../hooks/useTasks';
import { TaskFormData } from '../types/Task';

export default function AddTaskScreen() {
  const { addTask } = useTasks();

  const handleSubmit = async (taskData: TaskFormData) => {
    try {
      await addTask(taskData);
      router.back();
    } catch (error) {
      console.error('Error adding task:', error);
      // You could show an error message to the user here
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Add New Task</Text>
      </View>
      
      <TaskForm
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        submitButtonText="Add Task"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});