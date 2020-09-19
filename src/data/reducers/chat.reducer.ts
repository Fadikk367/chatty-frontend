import { act } from 'react-dom/test-utils';
import { Action, ActionTypes, disconnectSocket } from '../actions';
import { User, Room } from '../models';

interface InitialChatState {
  connectedUsers: User[];
  rooms: Room[];
}

const initialState: InitialChatState = {
  connectedUsers: [],
  rooms: [],
}

export const chatReducer = (state = initialState, action: Action) => {
  switch(action.type) {
    case ActionTypes.NEW_USER: {
      const newUser = action.payload;
      return {
        ...state,
        connectedUsers: [...state.connectedUsers, newUser],
      }
    }
    case ActionTypes.NEW_ROOM: {
      const newRoom = action.payload;

      return {
        ...state,
        rooms: [...state.rooms, newRoom],
      }
    }
    case ActionTypes.ROOM_DELETED: {
      const roomId = action.payload;
      const remainingRooms = state.rooms.filter(room => room.id !== roomId);

      return {
        ...state,
        rooms: remainingRooms,
      }
    }
    case ActionTypes.RECEIVE_CHAT_STATE: {
      const { connectedUsers, availableRooms } = action.payload;

      return {
        ...state,
        connectedUsers,
        rooms: availableRooms,
      }
    }
    case ActionTypes.USER_DISCONNECTED: {
      const userId = action.payload;
      const disconnectedUser = state.connectedUsers.find(user => user.id === userId);
      const remainingUsers = state.connectedUsers.filter(user => user.id !== userId);
      console.log(`user left`, disconnectedUser);

      return {
        ...state,
        connectedUsers: remainingUsers,
      }
    }
    default:
      return state;
  }
}