const Result = (state = 0, action) => {
  switch (action.type) {
    case "CHANGE_LENGTH":
      return (state = action.payload);
    default:
      return state;
  }
};

export default Result;
