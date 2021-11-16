const ChangeList = (state = 0, action) => {
  switch (action.type) {
    case "CHANGED":
      return state + 1;
    default:
      return state;
  }
};

export default ChangeList;
