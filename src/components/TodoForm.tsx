import { useState } from 'react';
import { generateId } from '@/utils/generateId';
import { useAppDispatch } from '@/store';
import { addTodoItem } from '@/store/actions';

const DEFAULT_INPUT_VALUE = '';

export default function TodoForm() {
  const [value, setValue] = useState<string>(DEFAULT_INPUT_VALUE);
  const dispatch = useAppDispatch();

  const formHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (!value.trim().length) return;

    dispatch(
      addTodoItem({ id: generateId(), title: value, complited: false })
    );
  
    clearInputHandler();
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const clearInputHandler = () => setValue(DEFAULT_INPUT_VALUE);

  return (
    <form
      onSubmit={formHandler}
      className="flex gap-5 max-md:gap-3 max-w-3xl max-md:max-w-xl mx-auto mt-0 mb-5 p-5 max-md:p-3 bg-[rgb(0,0,0,0.5)] backdrop-blur-lg rounded-lg shadow-lg drop-shadow-md"
    >
      <div className="relative grow">
        <input
          className="w-full pl-5 pr-14 max-md:pr-11 py-5 max-sm:py-3 max-md:py-3.5 text-xl max-md:text-base rounded-lg shadow-inner bg-slate-50 focus:outline-none"
          type="text"
          placeholder="Enter Your Todo..."
          value={value}
          onChange={inputHandler}
          autoFocus
        />
        <button
          type="button"
          onClick={clearInputHandler}
          className={`absolute top-0.5 max-md:-top-1 max-sm:-top-1.5 right-2 max-md:right-1 p-2 text-[rgb(0,0,0,0.5)] text-4xl max-md:text-3xl transition-all hover:text-[rgb(0,0,0,0.7)] active:text-[rgb(0,0,0,0.8)] ${
            !value.length
              ? 'opacity-0 pointer-events-none select-none'
              : ''
          }`}
        >
          &times;
        </button>
      </div>
      <button
        type="submit"
        className={`p-5 max-md:p-3.5 max-sm:py-3 text-xl max-md:text-base rounded-lg transition-colors select-none drop-shadow-sm ${
          value.trim().length
            ? 'pointer-events-auto bg-green-500 text-slate-50 hover:cursor-pointer hover:bg-green-600 active:bg-green-700'
            : 'pointer-events-none bg-green-800 text-slate-400 hover:cursor-auto'
        }`}
      >
        Add <span className="max-sm:hidden">Todo</span>
      </button>
    </form>
  );
}
