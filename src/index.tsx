import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/foundational/index.scss';
import UserCountProvider from './lib/UsersInHeaderContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <UserCountProvider>
      <App />
    </UserCountProvider>
  </StrictMode>
);
