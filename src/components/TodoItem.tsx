import { type todoItemType } from '@/types';
import {
  removeTodo,
  toggleComplitedTodo,
  editTodoTitle,
} from '@/store/slices/todoListSlice';
import { useAppDispatch } from '@/store';
import { useState } from 'react';

type TodoItemProps = {
  priority: number;
  data: todoItemType;
};

export default function TodoItem({ data, priority }: TodoItemProps) {
  const { id, title, complited } = data;
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>(title);
  const dispatch = useAppDispatch();

  const removeTodoItemHandler = () => {
    dispatch(removeTodo(id));
  };

  const toggleTodoItemHandler = () => {
    dispatch(toggleComplitedTodo(id));
    setIsEditMode(false);
  };

  const toggleEditMode = () => {
    if (!newTitle.length) {
      dispatch(removeTodo(id));
    } else if (title !== newTitle) {
      dispatch(editTodoTitle({ id, newTitle }));
    }

    setIsEditMode((prev) => !prev);
  };

  const editItemValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  return (
    <li className="flex items-center gap-2.5 mb-5 max-md:mb-3 pb-5 max-md:pb-3 text-xl max-md:text-lg max-sm:text-base border-b-2 border-opacityGrey last:mb-0 last:pb-0 last:border-none">
      <span
        className={`pl-2 max-sm:pl-1 transition-all [text-shadow:_0_0_40px_rgb(0_0_0_/_60%)] ${
          complited ? 'text-opacityGrey' : ''
        }`}
      >
        {priority}.
      </span>
      {isEditMode ? (
        <input
          type="text"
          value={newTitle}
          onChange={editItemValueHandler}
          placeholder="Edit Your Todo..."
          className="grow min-w-[130px] px-3 py-1.5 max-sm:py-[0.25rem] bg-slate-50 text-black focus:outline-none rounded-md"
          autoFocus
        />
      ) : (
        <span
          className={`grow break-all transition-all [text-shadow:_0_0_40px_rgb(0_0_0_/_60%)] ${
            complited ? 'line-through text-opacityGrey' : ''
          }`}
        >
          {title}
        </span>
      )}
      <input
        className="shrink-0 cursor-pointer w-5 max-md:w-4 h-5 max-md:h-4 mx-2.5 max-md:mx-1.5 max-sm:mx-0.5"
        type="checkbox"
        onChange={toggleTodoItemHandler}
        defaultChecked={complited}
      />
      <button
        onClick={toggleEditMode}
        className={`shrink-0 w-10 max-md:w-8 h-10 max-md:h-8 font-normal bg-green-500 rounded transition-colors drop-shadow-sm hover:bg-green-600 active:bg-green-700 ${
          complited
            ? 'pointer-events-none bg-green-700 text-slate-400 select-none'
            : ''
        }`}
      >
        {isEditMode ? (
          <b className="inline-block max-md:text-base max-md:-translate-y-[1px] max-md:translate-x-[0.3px]">
            &#10003;
          </b>
        ) : (
          <span className="inline-block max-md:text-base max-md:-translate-y-[1.2px]">
            &#9998;
          </span>
        )}
      </button>
      <button
        className="shrink-0 w-10 max-md:w-8 h-10 max-md:h-8 font-normal text-3xl max-md:text-2xl bg-red-500 rounded transition-colors drop-shadow-sm hover:bg-red-600 active:bg-red-700"
        onClick={removeTodoItemHandler}
      >
        <span className="flex justify-center items-center -translate-y-[0.20rem] max-md:-translate-y-[0.18rem] max-md:translate-x-[0.4px]">
          &times;
        </span>
      </button>
    </li>
  );
}
