import { Action, ActionTypes } from '../actions';

interface InitialChatState {
  authToken: string;
  isLoggedIn: boolean;
  user?: {
    firstName: string;
    lastName: string;
    nickname: string;
    id: number;
  }
}

const initialState: InitialChatState = {
  authToken: '',
  isLoggedIn: false,
}

export const authReducer = (state = initialState, action: Action) => {
  switch(action.type) {
    case ActionTypes.LOGIN_USER_SUCCESS: {
      const { token, user } = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        authToken: token,
        user: user
      }
    }
    default:
      return state;
  }
}