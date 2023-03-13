export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case "":
      throw new Error("Action.type = ABC is not finished");

    default:
      return initialState;
  }
};
