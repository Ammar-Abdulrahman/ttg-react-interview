import { TodoActionTypes } from './actions';
import { combineReducers } from 'redux';
import { Task } from '../../types/Task';
import update from 'immutability-helper';

const defaultState: Array<Task> = [];

const todoReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO: {
      return update(state, { $push: [action.payload.task] });
    }
    case TodoActionTypes.REMOVE_TODO: {
      const idToRemove = action.payload.id;
      const indexToRemove = state.findIndex(task => task.id === idToRemove);
      return update(state, { $splice: [[indexToRemove, 1]] });
    }
    case TodoActionTypes.GET_TODOS: {
      return action.payload.tasks;
    }
    default:
      return state;
  }
};

const reducer = combineReducers({
  tasks: todoReducer,
});

export default reducer;


// import { TodoActionTypes } from './actions';
// import update from 'immutability-helper';
// import { combineReducers } from 'redux';

// const defaultState = {};

// const todoReducer = (state = defaultState, action: any) => {
//   switch (action.type) {
//     case TodoActionTypes.addTodo:
//       return state;
//     case TodoActionTypes.deleteTodo: {
//       return state;
//     }

//     default:
//       return state;
//   }
// };

// const reducer = combineReducers({
//   current: todoReducer,
// });

// export default reducer;
