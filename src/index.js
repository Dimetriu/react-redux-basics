import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';

const initialState = {
  result: 1,
  lastValues: [],
  userName: "Max"
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;

    case "SUBTRACT":
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;

    default:
      break;
  }

  return state;
};

const store = createStore(reducer);

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
