import { applyMiddleware, createStore } from 'redux';

const performanceMiddleware = (store) => (next) => (action) => {
  const start = performance.now();
  next(action);
  console.log(
    `Action ${action.type} took: ${performance.now() - start}, store: ${
      store.getState().blah
    }`
  );
};

const reducer = (state = {}, action) => {
  if (action.type === 'Hello') {
    state = { ...state, blah: 'reducer measured with performance middleware' };
  }

  return state;
};

const perfStore = createStore(reducer, applyMiddleware(performanceMiddleware));

export default perfStore;
