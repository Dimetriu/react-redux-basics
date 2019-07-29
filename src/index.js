import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      state += action.payload;
      break;

    case "SUBTRACT":
      state -= action.payload;
      break;

    default:
      break;
  }

  return state;
};

const store = createStore(reducer, 3);

store.subscribe(() => {
  console.log("Store updated", store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 3,
});

store.dispatch({
  type: "SUBTRACT",
  payload: 5,
});

ReactDOM.render(<App />, document.getElementById('root'));
