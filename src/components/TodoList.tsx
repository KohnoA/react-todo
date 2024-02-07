import { useAppSelector, useAppDispatch } from '@/store';
import { removeTodoList } from '@/store/actions/todosActions';
import TodoItem from './TodoItem';
import trashImg from '/assets/icons/trash.svg';

export default function TodoList() {
  const { todos } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const removeTodoListHandler = () => {
    dispatch(removeTodoList());
  };

  if (!todos.length) return null;

  return (
    <section className="relative max-w-3xl max-md:max-w-xl mx-auto my-0 p-5 max-md:p-3 text-slate-50 bg-[rgb(0,0,0,0.5)] backdrop-blur-lg rounded-lg shadow-lg drop-shadow-md">
      <h2 className="mb-5 max-md:mb-3 pb-5 max-md:pb-3 text-3xl max-md:text-2xl max-sm:text-xl text-center border-b-2 border-opacityGrey [text-shadow:_0_0_40px_rgb(0_0_0_/_60%)]">
        Your Todos
      </h2>

      <button
        onClick={removeTodoListHandler}
        className="absolute top-5 max-md:top-2.5 right-5 max-md:right-2 p-2 opacity-60 transition-opacity hover:opacity-100 active:opacity-30"
        title="Remove Todo List"
      >
        <img src={trashImg} className="w-[25px] h-[25px] max-md:w-[22px] max-md:h-[22px]" alt="Remove Todo List" />
      </button>

      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={todo.id} data={todo} priority={index + 1} />
        ))}
      </ul>
    </section>
  );
}
