import { createAction } from '@reduxjs/toolkit';

const fetchTodoRequest = createAction('todos/fetchTodoRequest');
const fetchTodoSuccess = createAction('todos/fetchTodoSuccess');
const fetchTodoError = createAction('todos/fetchTodoError');

const addTodoRequest = createAction('todos/addTodoRequest');
const addTodoSuccess = createAction('todos/addTodoSuccess');
const addTodoError = createAction('todos/addTodoError');

const updateTodoRequest = createAction('todos/updateTodoRequest');
const updateTodoSuccess = createAction('todos/updateTodoSuccess');
const updateTodoError = createAction('todos/updateTodoError');

const updateTodoStatusDoneRequest = createAction(
  'todos/updateTodoStatusDoneRequest',
);
const updateTodoStatusDoneSuccess = createAction(
  'todos/updateTodoStatusDoneSuccess',
);
const updateTodoStatusDoneError = createAction(
  'todos/updateTodoStatusDoneError',
);

const deleteTodoRequest = createAction('todos/deleteTodoRequest');
const deleteTodoSuccess = createAction('todos/deleteTodoSuccess');
const deleteTodoError = createAction('todos/deleteTodoError');

const clearTodoError = createAction('todos/clearError');

const todosActions = {
  fetchTodoRequest,
  fetchTodoSuccess,
  fetchTodoError,
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  updateTodoRequest,
  updateTodoSuccess,
  updateTodoError,
  updateTodoStatusDoneRequest,
  updateTodoStatusDoneSuccess,
  updateTodoStatusDoneError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  clearTodoError,
};
export default todosActions;
