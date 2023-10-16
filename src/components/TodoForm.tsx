import { onChangeInput, clearInput } from '@/store/slices/todoFormSlice';
import { addNewTodo } from '@/store/slices/todoListSlice';
import { useAppDispatch, useAppSelector } from '@/store';
import { generateId } from '@/utils/generateId';

export default function TodoForm() {
  const inputValue = useAppSelector((state) => state.todoFrom.value);
  const dispatch = useAppDispatch();

  const formHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (!inputValue.trim().length) return;

    dispatch(
      addNewTodo({ id: generateId(), title: inputValue, complited: false })
    );
    dispatch(clearInput());
    console.log('Submit');
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(onChangeInput(event.target.value));
  };

  const clearInputHandler = () => {
    dispatch(clearInput());
  };

  return (
    <form
      onSubmit={formHandler}
      className="flex gap-5 max-w-3xl mx-auto mt-0 mb-5 p-5 bg-[rgb(0,0,0,0.5)] backdrop-blur-lg rounded-lg shadow-lg drop-shadow-md"
    >
      <div className="relative grow">
        <input
          className="w-full pl-5 pr-14 py-5 text-xl rounded-lg shadow-inner bg-slate-50 focus:outline-none"
          type="text"
          placeholder="Enter Your Todo..."
          value={inputValue}
          onChange={inputHandler}
          autoFocus
        />
        <button
          type="button"
          onClick={clearInputHandler}
          className={`absolute top-0.5 right-2 p-2 text-[rgb(0,0,0,0.5)] text-4xl transition-all hover:text-[rgb(0,0,0,0.7)] active:text-[rgb(0,0,0,0.8)] ${
            !inputValue.length
              ? 'opacity-0 pointer-events-none select-none'
              : ''
          }`}
        >
          &times;
        </button>
      </div>
      <button
        type="submit"
        className={`p-5 text-xl rounded-lg transition-colors select-none drop-shadow-sm ${
          inputValue.trim().length
            ? 'pointer-events-auto bg-green-500 text-slate-50 hover:cursor-pointer hover:bg-green-600 active:bg-green-700'
            : 'pointer-events-none bg-green-800 text-slate-400 hover:cursor-auto'
        }`}
      >
        Add Todo
      </button>
    </form>
  );
}
