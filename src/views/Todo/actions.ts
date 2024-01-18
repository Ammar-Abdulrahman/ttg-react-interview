import { Dispatch } from 'redux';
import { Task } from '../../types/Task';
import TaskService from '../../services/TasksService';

export const TodoActionTypes = {
  ADD_TODO: 'TODO/ADD',
  REMOVE_TODO: 'TODO/REMOVE',
  GET_TODOS: 'TODO/GET',
};

const taskService = new TaskService();

export class TodoActions {
  static addTodo = (title: string ) => {
    return (dispatch: Dispatch) => {
      const newTask: Task = {id:Date.now() ,title };
      taskService.addTask(newTask);
      dispatch({ type: TodoActionTypes.ADD_TODO, payload: { task: newTask } });
    };
  };

  static removeTodo = (id: number) => {
    return (dispatch: Dispatch) => {
      taskService.removeTask(id);
      dispatch({ type: TodoActionTypes.REMOVE_TODO, payload: { id } });
    };
  };

  static getTodos = () => {
    return (dispatch: Dispatch) => {
      const tasks = taskService.getTasks();
      dispatch({ type: TodoActionTypes.GET_TODOS, payload: { tasks } });
    };
  };
}

// import { Dispatch } from 'redux';

// export const TodoActionTypes = {
//   addTodo: 'TODO/ADD',
//   deleteTodo: 'TODO/REMOVE',
// };

// export class TodoActions {
//   addTodo = (title: string) => {};

//   removeTodo = (id: string) => {};
// }
