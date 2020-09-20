import { combineReducers } from 'redux';
import { chatReducer } from './chat.reducer';
import { userReducer } from './user.reducer';
import { Room, User } from '../models';

export interface StoreState {
  chat: {
    connectedUsers: { [key: string]: User },
    rooms: { [key: string]: Room },
  },
  user: {
    nickname: string;
    loggedIn: boolean;
    myRooms: string[];
    id?: string;
  },
}

const rootReducer = combineReducers<StoreState>({
  chat: chatReducer,
  user: userReducer,
});

export default rootReducer;
