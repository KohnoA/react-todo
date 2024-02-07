import { API_BREAKPOINT } from '@/constants';

export const deleteTodo = async (id: number) => {
  const response = await fetch(`${API_BREAKPOINT}${id}`, {
    method: 'DELETE',
  })

  const data = await response.json();

  return data;
}