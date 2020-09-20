import { Action, ActionTypes } from '../actions';

interface InitialUserState {
  nickname: string;
  loggedIn: boolean;
  myRooms: string[];
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
    case ActionTypes.JOIN_ROOM: {
      const { roomId } = action.payload;

      return {
        ...state,
        myRooms: [...state.myRooms, roomId]
      }
    }
    case ActionTypes.LEAVE_ROOM: {
      const { roomId } = action.payload;
      const remaingingRooms = state.myRooms.filter(room => room !== roomId);

      return {
        ...state,
        myRooms: remaingingRooms,
      }
    }
    case ActionTypes.RECEIVE_CHAT_STATE: {
      const { id } = action.payload;

      return {
        ...state,
        id,
      }
    }
    default:
      return state;
  }
}