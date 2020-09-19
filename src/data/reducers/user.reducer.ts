import { Action, ActionTypes } from '../actions';
import { Room } from '../models';

interface InitialUserState {
  nickname: string;
  loggedIn: boolean;
  myRooms: Room[];
  id?: string;
}

const initialState: InitialUserState = {
  nickname: '',
  loggedIn: false,
  myRooms: [],
}

export const userReducer = (state = initialState, action: Action) => {
  switch(action.type) {
    case ActionTypes.CREATE_NEW_USER: {
      const me = action.payload;

      return {
        ...state,
        nickname: me.nickname,
      }
    }
    default:
      return state;
  }
}