import { createStore } from 'redux';

const reducer = (state = {}, action) => {
  if (action.type === 'Hello') {
    state = { ...state, blah: 'asdfasdf' };
  }

  return state;
};

const logEnhancer = (createStore) => (reducer, initialState, enhancer) => {
  const logReducer = (state, action) => {
    console.log('old state', state, action);
    const newState = reducer(state, action);
    console.log('new state', newState, action);

    return newState;
  };

  return createStore(logReducer, initialState, enhancer);
};

const store = createStore(reducer, logEnhancer);

export default store;
