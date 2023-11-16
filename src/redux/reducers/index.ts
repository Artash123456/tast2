import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { EncryptionService } from 'utils/helpers';

//-----------reducers------------

import { tasks } from './tasks';
import { modal } from './modal';

const combinedReducers = combineReducers({
  tasks: tasks.reducer,
  modal: modal.reducer,
});

export const store = configureStore({ reducer: combinedReducers });

store.subscribe(() => {
  const state = store.getState();
  if (state) {
    localStorage.setItem(
      'state',
      EncryptionService.encrypt(JSON.stringify(state))
    );
  }
});
