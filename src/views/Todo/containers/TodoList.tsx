import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, createStyles, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import AddTodo from '../components/AddTodo';
import { TodoActions } from '../actions';
import { Task } from '../../../types/Task';
import { ListStyle } from '../style/index.style';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => createStyles({ 
  root: {
    maxWidth: 400,
    margin: 'auto',
  },
}));

const TodoList = () => {
  const classes = useStyles();
  const tasks: Array<Task> = useSelector((state: any) => state.todo.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (title: string) => {
    dispatch(TodoActions.addTodo(title));
  };

  const handleRemoveTask = (id: number) => {
    dispatch(TodoActions.removeTodo(id));
  };

  useEffect(() => {
    dispatch(TodoActions.getTodos());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <AddTodo onAddTask={handleAddTask} />
      <List style={{display:"flex" , justifyContent:"center" , flexDirection: 'column' }} >
        {tasks.map((task: Task) => (
          <ListItem style={ListStyle} key={task.id}>
            <ListItemText style={{color:"white"}} primary={task.title} />
            <ListItemSecondaryAction>
              <IconButton style={{color:"#F46609"}} edge="end" aria-label="delete" onClick={() => handleRemoveTask(task.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoList;


// import React, { useEffect, useState } from 'react';
// import { makeStyles, createStyles } from '@material-ui/core/styles';
// import AddTodo from '../components/AddTodo';

// const useStyles = makeStyles(theme =>
//   createStyles({
//     root: {},
//   })
// );

// const TodoList = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AddTodo />
//     </div>
//   );
// };

// export default TodoList;
