import * as React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//add comment

import TodoList from './containers/TodoList';

const useStyles = makeStyles(theme => ({
  root: {
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

const Todo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="sm" className={classes.container}>
        <h1>To Do App</h1>
        <TodoList />
      </Container>
    </div>
  );
};

export default Todo;
