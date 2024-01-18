import { Task } from "../types/Task";

class TaskService {
  task_key = 'TASKS';

  constructor() {}

  loadFromStorage(): Array<Task> {
    const stored = localStorage.getItem(this.task_key);
    return stored ? JSON.parse(stored) : [];
  }

  commit(tasks: Array<Task>) {
    localStorage.setItem(this.task_key, JSON.stringify(tasks));
  }

  getTasks() {
    return this.loadFromStorage();
  }

  addTask(task: Task) {
    const tasks = this.loadFromStorage();
    tasks.push({
      ...task,
      id: tasks.length + 1,
    });
    this.commit(tasks);
  }

  removeTask(id: number) {
    const tasks = this.loadFromStorage();
    const index = tasks.findIndex(t => t.id === id);
    if (index > -1) {
      tasks.splice(index, 1);
      this.commit(tasks);
    }
  }
}

export default TaskService;


// import { Task } from '../types/Task';

// class TaskService {
//   task_key = 'TASkS';

//   constructor() {}

//   loadFromStorage(): Array<Task> {
//     var stored = localStorage.getItem(this.task_key);
//     return stored ? JSON.parse(stored) : [];
//   }

//   commit(tasks: Array<Task>) {
//     localStorage.setItem(this.task_key, JSON.stringify(tasks));
//   }

//   getTasks() {
//     return this.loadFromStorage();
//   }

//   getTask(id: number) {
//     var tasks = this.loadFromStorage();
//     return tasks.find(t => t.id === id);
//   }

//   addTask(task: Task) {
//     var tasks = this.loadFromStorage();
//     tasks.push({
//       ...task,
//       id: tasks.length + 1,
//     });
//     this.commit(tasks);
//   }

//   removeTask(id: number) {
//     var tasks = this.loadFromStorage();
//     var index = tasks.findIndex(t => t.id === id);
//     if (index > -1) {
//       tasks.splice(index, 1);
//     }
//     this.commit(tasks);
//   }
// }

// export default TaskService;
