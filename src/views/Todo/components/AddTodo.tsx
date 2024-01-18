import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import { ButtonStyle , TextStyle } from '../style/index.style';

const useStyles = makeStyles(theme => createStyles({ root: {} }));

type AddTodoProps = {
  onAddTask?: (todo: string) => void;
};

const AddTodo = ({ onAddTask }: AddTodoProps) => {
  const classes = useStyles();
  const [title, setTitle] = useState('');

  const handleAddTask = () => {
    if (onAddTask) {
      onAddTask(title);
      setTitle('');
    }
  };

  return (
    <div className={classes.root}>
      <TextField
        style={TextStyle}
        id="addTaskInput"
        label="Title"
        variant="outlined"
        margin="dense"
        autoFocus={true}
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <Button style={ButtonStyle} variant="contained" onClick={handleAddTask}>
        Add Task
      </Button>
    </div>
  );
};

export default AddTodo;


// import React, { useEffect, useState } from 'react';
// import { makeStyles, createStyles } from '@material-ui/core/styles';
// import { Button, TextField } from '@material-ui/core';

// const useStyles = makeStyles(theme =>
//   createStyles({
//     root: {},
//   })
// );

// type AddToDoProps = {
//   onAddTask?: (todo: string) => void;
// };

// const AddTodo = ({ onAddTask }: AddToDoProps) => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <TextField
//         id="addTaskInput"
//         label="Title"
//         variant="outlined"
//         margin="dense"
//         autoFocus={true}
//       />
//       <Button variant="contained">Add Task</Button>
//     </div>
//   );
// };

// export default AddTodo;
