import { Message, Action, ActionTypes, User } from '../actions';

interface InitialChatState {
  messages: Message[];
  connectedUsers: User[];
}

const initialState: InitialChatState = {
  messages: [],
  connectedUsers: [],
}

export const chatReducer = (state = initialState, action: Action) => {
  switch(action.type) {
    case ActionTypes.SEND_MESSAGE: {
      const sendMessage = action.payload;
      state.messages.push(sendMessage);

      return {
        ...state,
        messages: [...state.messages],
      }
    }
    case ActionTypes.RECEIVE_MESSAGE: {
      const incomingMessage = action.payload;
      state.messages.push(incomingMessage);
      
      return {
        ...state,
        messages: [...state.messages],
      }
    }
    case ActionTypes.USER_JOINED: {
      const newUser = action.payload;
      state.connectedUsers.push(newUser);
      
      return {
        ...state,
        connectedUsers: [...state.connectedUsers],
      }
    }
    case ActionTypes.USER_LEFT: {
      const goneUser = action.payload;
      const remainingUsers = state.connectedUsers.filter(user => user.id !== goneUser.id);
      
      return {
        ...state,
        connectedUsers: remainingUsers,
      }
    }
    case ActionTypes.JOIN: {
      const me = action.payload;
      state.connectedUsers.push(me);
      
      return {
        ...state,
        connectedUsers: [...state.connectedUsers],
      }
    }
    case ActionTypes.LEAVE: {
      const me = action.payload;
      const updatedUsers = state.connectedUsers.filter(user => user.id !== me.id);
      
      return {
        ...state,
        connectedUsers: updatedUsers,
      }
    }
    default:
      return state;
  }
}