import { legacy_createStore } from 'redux';
import { rootReducer } from './reducers';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

export const store = legacy_createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
