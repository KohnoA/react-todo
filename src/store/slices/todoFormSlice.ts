import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  value: string;
}

const initialState: initialStateType = {
  value: '',
};

export const todoFormSlice = createSlice({
  name: 'todoFrom',
  initialState,
  reducers: {
    onChangeInput(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },

    clearInput(state) {
      state.value = initialState.value;
    }
  },
});

export const { onChangeInput, clearInput } = todoFormSlice.actions;