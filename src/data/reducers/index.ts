import { combineReducers } from 'redux';
import { chatReducer } from './chat.reducer';
import { Message, User } from '../actions';

export interface StoreState {
  chat: {
    messages: Message[],
    connectedUsers: User[],
  }
}

const rootReducer = combineReducers<StoreState>({
  chat: chatReducer
});

export default rootReducer;
