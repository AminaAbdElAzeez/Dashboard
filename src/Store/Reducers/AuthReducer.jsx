import { REMOVE_TOKEN, SET_TOKEN } from "../Actions/AuthActions";

const initialState = {
  token: null,
  email: "",
  name: "",
};

const authReducer = (state = initialState, action) => {
  if (action.type === SET_TOKEN) {
    return {
      ...state,
      token: action.payload.token,
      email: action.payload.email,
      name: action.payload.name,
    };
  }
  if (action.type === REMOVE_TOKEN) {
    return {
      ...state,
      token: null,
      email: "",
      name: "",
    };
  }
  return state;
};

export default authReducer;
