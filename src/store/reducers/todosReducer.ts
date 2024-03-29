import { TodosActions } from '@/constants';
import { TodosActionsType, TodosStateType } from '@/types';

const initialState: TodosStateType = {
  isLoading: false,
  todos: [],
};

export const todosReducer = (
  state = initialState,
  action: TodosActionsType
): TodosStateType => {
  switch (action.type) {
    case TodosActions.ADD_TODO_ITEM:
      return { ...state, todos: [...state.todos, action.payload] };

    case TodosActions.REMOVE_TODO_ITEM:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case TodosActions.TOGGLE_TODO_STATUS:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            todo.complited = !todo.complited;
          }

          return todo;
        }),
      };
    
    case TodosActions.EDIT_TODO_TITLE:
      return { ...state, todos: state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.newTitle;
        }

        return todo;
      }) }

    case TodosActions.REMOVE_TODO_LIST:
      return { ...state, todos: initialState.todos };

    case TodosActions.SET_TODO_LIST:
      return { ...state, todos: action.payload };
    
    case TodosActions.SET_LOADING_TODOS:
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};
