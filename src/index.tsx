import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'assets/styles/index.css';
import { ErrorBoundary } from 'components';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'redux/reducers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ErrorBoundary>
);
