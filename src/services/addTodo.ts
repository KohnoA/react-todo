import { API_BREAKPOINT } from '@/constants';
import { todoItemType } from '@/types';

export const addTodo = async (todo: todoItemType) => {
  await fetch(API_BREAKPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
};
