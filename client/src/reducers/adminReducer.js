export const adminReducer = (state = null, action) => {
    switch (action.type) {
      case "LOGGED_IN_ADMIN":
        return action.payload;
      case "LOGOUT":
        return action.payload;
      default:
        return state;
    }
  };
  