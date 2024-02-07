import { TodosActions } from '@/constants';
import {
  todoItemType,
  RemoveTodoActionType,
  AddTodoActionType,
  ToggleTodoStatusActionType,
  EditTodoTitleActionType,
  RemoveTodoListActionType,
  GetTodoListActionType,
  SetTodoListActionType,
  SetLoadingTodosActionType
} from '@/types';

export const setLoadingTodos = (payload: boolean): SetLoadingTodosActionType  => ({
  type: TodosActions.SET_LOADING_TODOS,
  payload
});

export const setTodoList = (payload: todoItemType[]): SetTodoListActionType  => ({
  type: TodosActions.SET_TODO_LIST,
  payload
});

export const getTodoList = (): GetTodoListActionType  => ({
  type: TodosActions.GET_TODO_LIST,
});

export const addTodoItem = (newTodo: todoItemType): AddTodoActionType => ({
  type: TodosActions.ADD_TODO_ITEM,
  payload: newTodo,
});

export const removeTodoItem = (id: number): RemoveTodoActionType => ({
  type: TodosActions.REMOVE_TODO_ITEM,
  payload: id,
});

export const toggleTodoStatus = (id: number): ToggleTodoStatusActionType => ({
  type: TodosActions.TOGGLE_TODO_STATUS,
  payload: id,
});

export const editTodoTitle = (payload: {
  id: number;
  newTitle: string;
}): EditTodoTitleActionType => ({
  type: TodosActions.EDIT_TODO_TITLE,
  payload,
});

export const removeTodoList = (): RemoveTodoListActionType => ({
  type: TodosActions.REMOVE_TODO_LIST,
});
