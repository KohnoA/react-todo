import { API_BREAKPOINT } from '@/constants';
import { todoItemType } from '@/types';

export const toggleTodoStatus = async (todo: todoItemType) => {
  const response = await fetch(`${API_BREAKPOINT}/${todo.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ completed: !todo.complited }),
  });
  const data = await response.json();

  return data;
};