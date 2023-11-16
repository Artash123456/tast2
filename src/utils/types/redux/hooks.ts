import { store } from 'redux/reducers';
export type Dispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppState = typeof store.getState;
