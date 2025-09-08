import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { TaskForm } from '../../components/TaskForm';
import { useTasks } from '../../hooks/useTasks';
import { TaskFormData } from '../../types/Task';

export default function EditTaskScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { tasks, updateTask } = useTasks();
  
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Task Not Found</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.errorText}>The requested task could not be found.</Text>
        </View>
      </View>
    );
  }

  const handleSubmit = async (taskData: TaskFormData) => {
    try {
      await updateTask(task.id, taskData);
      router.back();
    } catch (error) {
      console.error('Error updating task:', error);
      // You could show an error message to the user here
    }
  };

  const handleCancel = () => {
    router.back();
  };

  const initialData: TaskFormData = {
    title: task.title,
    description: task.description,
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Edit Task</Text>
      </View>
      
      <TaskForm
        initialData={initialData}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        submitButtonText="Update Task"
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});