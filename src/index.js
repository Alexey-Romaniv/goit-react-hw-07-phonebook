import React from 'react';
import ReactDOM from 'react-dom/client';
import { Phonebook } from 'components/App';
import './index.css';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Phonebook />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
