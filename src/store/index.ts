import { legacy_createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

export const store = legacy_createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
