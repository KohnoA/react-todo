import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { todoItemType } from '@/types';

type initialStateType = {
  list: todoItemType[];
};

const initialState: initialStateType = {
  list: [{ id: 1, title: 'Learn React', complited: false }],
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addNewTodo(state, action: PayloadAction<todoItemType>) {
      state.list.push(action.payload);
    },

    removeTodo(state, action: PayloadAction<number>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },

    toggleComplitedTodo(state, action: PayloadAction<number>) {
      const targetTodo = state.list.find((todo) => todo.id === action.payload);
      targetTodo!.complited = !targetTodo!.complited;
    },

    editTodoTitle(
      state,
      action: PayloadAction<{ id: number; newTitle: string }>
    ) {
      const targetTodo = state.list.find(
        (todo) => todo.id === action.payload.id
      );

      targetTodo!.title = action.payload.newTitle;
    },

    removeTodoList(state) {
      state.list = [];
    },
  },
});

export const {
  addNewTodo,
  removeTodo,
  toggleComplitedTodo,
  editTodoTitle,
  removeTodoList,
} = todoListSlice.actions;
