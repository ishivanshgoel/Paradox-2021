import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import UserReducer from './Reducers/UserReducer'

const store = createStore(UserReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
