import { useAppSelector, useAppDispatch } from '@/store';
import { removeTodoList } from '@/store/slices/todoListSlice';
import TodoItem from './TodoItem';
import trashImg from '@/assets/icons/trash.svg';

export default function TodoList() {
  const todoList = useAppSelector((state) => state.todoList.list);
  const dispatch = useAppDispatch();

  const removeTodoListHandler = () => {
    dispatch(removeTodoList());
  };

  if (!todoList.length) return null;

  return (
    <section className="relative max-w-3xl mx-auto my-0 p-5 text-slate-50 bg-[rgb(0,0,0,0.5)] backdrop-blur-lg rounded-lg shadow-lg drop-shadow-md">
      <h2 className="mb-5 pb-5 text-3xl text-center border-b-2 border-opacityGrey [text-shadow:_0_0_40px_rgb(0_0_0_/_60%)]">
        Your Todos
      </h2>

      <button
        onClick={removeTodoListHandler}
        className="absolute top-5 right-5 p-2 opacity-60 transition-opacity hover:opacity-100 active:opacity-30"
        title="Remove Todo List"
      >
        <img src={trashImg} width={25} height={25} alt="Remove Todo List" />
      </button>

      <ul>
        {todoList.map((todo, index) => (
          <TodoItem key={todo.id} data={todo} priority={index + 1} />
        ))}
      </ul>
    </section>
  );
}
