import { API_BREAKPOINT } from '@/constants';

export const getTodos = async () => {
  const response = await fetch(`${API_BREAKPOINT}?_limit=5`);
  const data = await response.json();

  return data;
};
