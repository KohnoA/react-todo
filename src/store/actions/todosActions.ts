import { TodosActions } from '@/constants';
import {
  todoItemType,
  RemoveTodoActionType,
  AddTodoActionType,
  ToggleTodoStatusActionType,
  EditTodoTitleActionType,
  RemoveTodoListActionType,
} from '@/types';

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
