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


## Screenshots

The app includes the following screens:
- **Home Screen**: Task list with search and add functionality
- **Add Task Screen**: Form to create new tasks
- **Edit Task Screen**: Form to modify existing tasks
- **Task Details Screen**: Comprehensive task information view

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

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/zoegongyinlu/PersonalTaskApp.git
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
   # For iOS (expo go tested)
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



### Key Components

#### TaskItem Component
- Displays individual task information
- Handles status toggling and deletion
- Provides navigation to task details

#### TaskForm Component
- Reusable form for both adding and editing tasks
- Form validation and error handling
- Consistent styling and user experience

#### TasksContext & useTasks Hook (custom)
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
