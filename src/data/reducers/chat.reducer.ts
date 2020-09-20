import { Action, ActionTypes } from '../actions';
import { User, Room } from '../models';

interface InitialChatState {
  connectedUsers: {
    [key: string]: User
  }
  rooms: {
    [key: string]: Room
  }
}

const initialState: InitialChatState = {
  connectedUsers: {},
  rooms: {},
}

export const chatReducer = (state = initialState, action: Action) => {
  switch(action.type) {
    case ActionTypes.NEW_USER: {
      const newUser = action.payload;
      return {
        ...state,
        connectedUsers: {
          ...state.connectedUsers, 
          [newUser.id]: newUser,
        },
      }
    }
    case ActionTypes.NEW_ROOM: {
      const newRoom = action.payload;

      return {
        ...state,
        rooms: {
          ...state.rooms, 
          [newRoom.id]: newRoom,
        },
      }
    }
    case ActionTypes.ROOM_DELETED: {
      const roomId = action.payload;
      delete state.rooms[roomId];

      return {
        ...state,
        rooms: {
          ...state.rooms
        },
      }
    }
    case ActionTypes.RECEIVE_CHAT_STATE: {
      const { connectedUsers, availableRooms } = action.payload;

      const users : {
        [key: string]: User
      } = {}
      const rooms: {
        [key: string]: Room
      } = {};

      connectedUsers.forEach(user => {
        users[user.id] = user
      });
      availableRooms.forEach(room => {
        rooms[room.id] = room
      });

      return {
        ...state,
        connectedUsers: users,
        rooms: rooms, 
      }
    }
    case ActionTypes.USER_DISCONNECTED: {
      const userId = action.payload;
      delete state.connectedUsers[userId];

      return {
        ...state,
        connectedUsers: { ...state.connectedUsers },
      }
    }
    case ActionTypes.WELCOME_TO_ROOM: {
      const room = action.payload.room;

      return {
        ...state,
        rooms: { 
          ...state.rooms,
          [room.id]: {
            ...room,
          } 
        },
      }
    }
    case ActionTypes.USER_JOINED_ROOM: {
      const { user, roomId } = action.payload;
      const room = state.rooms[roomId];

      return {
        ...state,
        rooms: {
          ...state.rooms,
          [roomId]: {
            ...room,
            members: [...room.members, user],
          }
        },
      }
    }
    case ActionTypes.USER_LEFT_ROOM: {
      const { user, roomId } = action.payload;
      const room = state.rooms[roomId];
      const remainingUsers = room.members.filter(member => member.id !== user.id);

      return {
        ...state,
        rooms: {
          ...state.rooms, 
          [roomId]: {
            ...room,
            members: remainingUsers,
          }
        },
      }
    }
    case ActionTypes.RECEIVE_CHAT_MESSAGE: {
      const { message, roomId } = action.payload;
      const room = state.rooms[roomId];

      return {
        ...state,
        rooms: {
          ...state.rooms,
          [roomId]: {
            ...room,
            messages: [...room.messages, message]
          }
        }
      }
    }
    default:
      return state;
  }
}