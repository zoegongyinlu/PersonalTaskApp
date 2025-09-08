# Personal Task Manager

A modern, feature-rich mobile task management application built with React Native, Expo, and TypeScript. This app provides a comprehensive solution for managing personal tasks with an intuitive user interface and robust functionality.

## Features

### Core Functionality
- **Task List**: Display all tasks with title, description, and status
- **Add New Tasks**: Create new tasks with a user-friendly form
- **Edit Tasks**: Modify existing task details (title and description)
- **Delete Tasks**: Remove tasks with confirmation dialog
- **Toggle Task Status**: Mark tasks as completed or pending
- **Task Details Screen**: View comprehensive task information
- **Search Functionality**: Filter tasks by title or description

### User Experience
- **Modern UI Design**: Clean, intuitive interface with Material Design principles
- **Responsive Layout**: Optimized for both iOS and Android devices
- **Smooth Navigation**: Seamless screen transitions using Expo Router
- **Visual Status Indicators**: Color-coded status badges and completion states
- **Confirmation Dialogs**: Safe deletion with user confirmation

### Technical Features
- **TypeScript**: Full type safety with comprehensive interfaces
- **React Context**: Shared state management across all components using React Context API
- **React Hooks**: Modern state management with useState, useCallback, and useEffect
- **Expo Router**: File-based navigation system
- **Data Persistence**: Tasks persist between app sessions using AsyncStorage
- **App Lifecycle Management**: Automatic task clearing when app is terminated or backgrounded
- **Mock Data**: Pre-populated with sample tasks for immediate testing
- **Clean Architecture**: Well-organized component structure with separation of concerns

## Screenshots

The app includes the following screens:
- **Home Screen**: Task list with search and add functionality
- **Add Task Screen**: Form to create new tasks
- **Edit Task Screen**: Form to modify existing tasks
- **Task Details Screen**: Comprehensive task information view

## Technology Stack

- **React Native**: 0.72.10
- **Expo**: ~49.0.15
- **TypeScript**: ~5.8.3
- **Expo Router**: ^2.0.15
- **React**: 18.2.0
- **AsyncStorage**: @react-native-async-storage/async-storage (for data persistence)

## Project Structure

```
mobile-app/
├── app/                          # Expo Router screens
│   ├── (tabs)/                   # Tab navigation
│   │   ├── _layout.tsx          # Tab layout configuration
│   │   └── index.tsx            # Main task list screen
│   ├── add-task.tsx             # Add new task screen
│   ├── edit-task/               # Edit task screens
│   │   └── [id].tsx            # Dynamic edit task screen
│   ├── task-details/            # Task details screens
│   │   └── [id].tsx            # Dynamic task details screen
│   └── _layout.tsx              # Root layout with TasksProvider and app lifecycle
├── components/                   # Reusable UI components
│   ├── TaskItem.tsx            # Individual task display component
│   ├── TaskForm.tsx            # Task creation/editing form
│   └── SearchBar.tsx           # Search functionality component
├── contexts/                     # React Context providers
│   └── TasksContext.tsx        # Shared task state management
├── hooks/                       # Custom React hooks
│   └── useTasks.ts             # Re-exports useTasks from TasksContext
├── types/                       # TypeScript type definitions
│   └── Task.ts                 # Task-related interfaces
├── data/                        # Mock data and constants
│   └── mockTasks.ts            # Sample task data (initial data source)
├── utils/                       # Utility functions
│   └── fileSystem.ts           # AsyncStorage-based data persistence
└── package.json                # Dependencies and scripts
```

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development) or Android Studio (for Android development)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PersonalTaskApp
   ```

2. **Navigate to the mobile app directory**
   ```bash
   cd mobile-app
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Run on your preferred platform**
   ```bash
   # For iOS
   npm run ios
   
   # For Android
   npm run android
   
   # For web (development only)
   npm run web
   ```

## Usage Guide

### Getting Started
1. Launch the app to see the main task list
2. The app comes pre-populated with sample tasks from mock data
3. All your changes (add, edit, delete) are automatically saved and persist between app sessions
4. New tasks appear immediately in the list without requiring a refresh
5. Use the search bar to filter tasks by title or description
6. Tap the "+ Add Task" button to create new tasks

### Managing Tasks
- **View Tasks**: All tasks are displayed on the home screen with status indicators
- **Add Tasks**: Use the add task form to create new tasks with title and description
- **Edit Tasks**: Tap on a task to view details, then use the "Edit Task" button
- **Delete Tasks**: Use the delete button on any task (with confirmation dialog)
- **Toggle Status**: Use the status toggle button to mark tasks as complete/pending

### Navigation
- **Home Screen**: Main task list with search functionality
- **Task Details**: Tap any task to view comprehensive details
- **Add Task**: Use the floating action button or header button
- **Edit Task**: Access from task details screen

## Development

### Code Quality Standards
- **TypeScript**: All components and functions are fully typed
- **Clean Code**: Meaningful variable and function names
- **Component Architecture**: Reusable, focused components
- **Error Handling**: Proper error states and user feedback
- **Performance**: Optimized with useCallback and proper state management

### Key Components

#### TaskItem Component
- Displays individual task information
- Handles status toggling and deletion
- Provides navigation to task details

#### TaskForm Component
- Reusable form for both adding and editing tasks
- Form validation and error handling
- Consistent styling and user experience

#### TasksContext & useTasks Hook
- **Shared State Management**: React Context provides centralized state across all components
- **Real-time Updates**: Changes in one component immediately reflect in all other components
- **Task Operations**: Complete CRUD operations (add, edit, delete, toggle status)
- **Data Persistence**: Automatic saving to AsyncStorage with error handling
- **Search Functionality**: Built-in task filtering by title and description
- **Loading States**: Proper loading indicators and error handling
- **App Lifecycle**: Automatic task clearing when app is terminated or backgrounded

### Data Persistence & App Lifecycle

The app uses **AsyncStorage** to persist task data between app sessions:

- **Initial Data**: App starts with mock data from `mockTasks.ts`
- **Automatic Saving**: All changes (add, edit, delete, toggle status) are automatically saved
- **Cross-Session Persistence**: Data survives app restarts and device reboots
- **Storage Management**: Uses `TasksStorageManager` utility for clean data operations
- **Error Handling**: Graceful fallback to mock data if storage operations fail
- **App Lifecycle Management**: Tasks are automatically cleared when the app is terminated or backgrounded

### State Management Architecture

The app uses a modern React Context-based architecture for state management:

- **TasksContext**: Centralized state provider that manages all task-related data
- **Shared State**: All components access the same state instance, ensuring consistency
- **Real-time Sync**: Changes made in any component immediately reflect across the entire app
- **Performance Optimized**: Uses React hooks (useCallback, useMemo) for optimal re-rendering
- **Type Safety**: Full TypeScript support with comprehensive interfaces


