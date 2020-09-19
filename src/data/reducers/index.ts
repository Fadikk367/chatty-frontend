import { combineReducers } from 'redux';
import { chatReducer } from './chat.reducer';
import { userReducer } from './user.reducer';
import { Room, User } from '../models';

export interface StoreState {
  chat: {
    connectedUsers: User[];
    rooms: Room[];
  },
  user: {
    nickname: string;
    loggedIn: boolean;
    myRooms: Room[];
    id?: string;
  },
}

const rootReducer = combineReducers<StoreState>({
  chat: chatReducer,
  user: userReducer,
});

export default rootReducer;
