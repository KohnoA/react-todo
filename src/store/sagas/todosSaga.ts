import { TodosActions } from '@/constants';
import { getTodos, deleteTodo, addTodo, toggleTodoStatus, editTodoTitle } from '@/services';
import { call, put, takeEvery, select } from 'redux-saga/effects';
import { setTodoList } from '../actions/todosActions';
import { AddTodoActionType, EditTodoTitleActionType, RemoveTodoActionType, ToggleTodoStatusActionType, todoItemType } from '@/types';

function* setTodosWorker() {
  const todos: todoItemType[] = yield call(getTodos);
  yield put(setTodoList(todos));
}

function* deleteTodoWorker(action: RemoveTodoActionType) {
  yield call(deleteTodo, action.payload);
}

function* addTodoWorker(action: AddTodoActionType) {
  yield call(addTodo, action.payload);
}

function* toggleTodoWorker(action: ToggleTodoStatusActionType) {
  const todos: todoItemType[] = yield select((state) => state.todos.todos);
  const currentTodo: todoItemType = yield todos.find((todo) => todo.id === action.payload);
  yield call(toggleTodoStatus, currentTodo);
}

function* editTodoTitleWorker(action: EditTodoTitleActionType) {
  yield call(editTodoTitle, action.payload);
}

export function* todoWatcher() {
  yield takeEvery(TodosActions.GET_TODO_LIST, setTodosWorker);
  yield takeEvery(TodosActions.REMOVE_TODO_ITEM, deleteTodoWorker);
  yield takeEvery(TodosActions.ADD_TODO_ITEM, addTodoWorker);
  yield takeEvery(TodosActions.TOGGLE_TODO_STATUS, toggleTodoWorker);
  yield takeEvery(TodosActions.EDIT_TODO_TITLE, editTodoTitleWorker);
}