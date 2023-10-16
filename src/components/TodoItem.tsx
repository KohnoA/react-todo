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
    if (title !== newTitle) {
      dispatch(editTodoTitle({ id, newTitle }));
    }

    setIsEditMode((prev) => !prev);
  };

  const editItemValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  return (
    <li className="flex items-center gap-2.5 mb-5 pb-5 text-xl border-b-2 border-opacityGrey last:mb-0 last:pb-0 last:border-none">
      <span
        className={`transition-all [text-shadow:_0_0_40px_rgb(0_0_0_/_60%)] ${
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
          className="grow px-3 py-1.5 bg-slate-50 text-black focus:outline-none rounded-md"
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
        className="cursor-pointer w-5 h-5 mx-2.5"
        type="checkbox"
        onChange={toggleTodoItemHandler}
        defaultChecked={complited}
      />
      <button
        onClick={toggleEditMode}
        className={`shrink-0 w-10 h-10 font-normal bg-green-500 rounded transition-colors drop-shadow-sm hover:bg-green-600 active:bg-green-700 ${
          complited
            ? 'pointer-events-none bg-green-700 text-slate-400 select-none'
            : ''
        }`}
      >
        {isEditMode ? <b>&#10003;</b> : <span>&#9998;</span>}
      </button>
      <button
        className="shrink-0 w-10 h-10 font-normal text-3xl bg-red-500 rounded transition-colors drop-shadow-sm hover:bg-red-600 active:bg-red-700"
        onClick={removeTodoItemHandler}
      >
        <span className="flex justify-center items-center -translate-y-[0.20rem]">
          &times;
        </span>
      </button>
    </li>
  );
}
