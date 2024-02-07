import { TodosActions } from '@/constants';

export interface TodosStateType {
  todos: todoItemType[];
}

export interface AddTodoActionType {
  type: TodosActions.ADD_TODO_ITEM;
  payload: todoItemType;
}

export interface RemoveTodoActionType {
  type: TodosActions.REMOVE_TODO_ITEM;
  payload: number;
}

export interface ToggleTodoStatusActionType {
  type: TodosActions.TOGGLE_TODO_STATUS;
  payload: number;
}

export interface EditTodoTitleActionType {
  type: TodosActions.EDIT_TODO_TITLE;
  payload: { id: number, newTitle: string };
}

export interface RemoveTodoListActionType {
  type: TodosActions.REMOVE_TODO_LIST;
}

export type TodosActionsType =
  | AddTodoActionType
  | RemoveTodoActionType
  | ToggleTodoStatusActionType
  | EditTodoTitleActionType
  | RemoveTodoListActionType;

export type todoItemType = {
  id: number,
  title: string,
  complited: boolean,
};