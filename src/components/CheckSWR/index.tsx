// import AddTask from './AddTask.js';
// import TaskList from './TaskList.js';
// import { TasksProvider } from './TasksContext.js';

import AddTask from "./AddTask";
import { TasksProvider } from "./TaskContext";
import TaskList from "./TaskList";

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
