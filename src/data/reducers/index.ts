import { combineReducers } from 'redux';
import { chatReducer } from './chat.reducer';
import { userReducer } from './user.reducer';
import { authReducer } from './auth.reducer';
import { Room, User } from '../models';

export interface StoreState {
  chat: {
    connectedUsers: { [key: string]: User },
    rooms: { [key: string]: Room },
  };
  user: {
    nickname: string;
    loggedIn: boolean;
    myRooms: string[];
    id?: string;
  };
  auth: {
    authToken: string;
    isLoggedIn: boolean;
    user?: {
      firstName: string;
      lastName: string;
      nickname: string;
      id: number;
    }
  }
}

const rootReducer = combineReducers<StoreState>({
  chat: chatReducer,
  user: userReducer,
  auth: authReducer,
});

export default rootReducer;
