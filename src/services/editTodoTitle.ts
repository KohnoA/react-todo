import { API_BREAKPOINT } from '@/constants';

export const editTodoTitle = async ({ id, newTitle }: { id: number, newTitle: string }) => {
  const response = await fetch(`${API_BREAKPOINT}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: newTitle }),
  });
  const data = await response.json();

  return data;
};