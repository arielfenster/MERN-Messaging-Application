const middleware = store => next => action => {
  console.log('In messages middleware. The action is: ', action);
  const result = next(action);
  console.log('Result of next(action) is: ', result);
  console.log('Next state is: ', store.getState());

  return result;
}

export default middleware;
