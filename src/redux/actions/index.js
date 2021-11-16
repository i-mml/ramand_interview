export const ChnagedList = () => {
  return {
    type: "CHANGED",
  };
};

export const ResultLength = (nr) => {
  return {
    type: "CHANGE_LENGTH",
    payload: nr,
  };
};

export const setLogIn = () => {
  return {
    type: "LOG_IN",
  };
};
export const setLogOut = () => {
  return {
    type: "LOG_OUT",
  };
};
