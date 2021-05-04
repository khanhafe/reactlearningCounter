const initialstate = {
  counter: 0
};

const reducer = (mystate = initialstate, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: mystate.counter + 1
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: mystate.counter - 1
    };
  }

  return mystate;
};

export default reducer;
