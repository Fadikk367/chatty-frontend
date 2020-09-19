import { ActionTypes } from './types';
import { User, Room, Message, ChatUserType, ChatState } from '../models';

export interface ConnectSocket {
  type: ActionTypes.SOCKET_CONNECT;
  payload: null;
}

export interface DisconnectSocket {
  type: ActionTypes.SOCKET_DISCONNECT;
  payload: null;
}


export interface CreateNewChatUser {
  type: ActionTypes.CREATE_NEW_USER;
  payload: {
    nickname: string;
    type: ChatUserType;
  };
}

export interface NewUser {
  type: ActionTypes.NEW_USER;
  payload: User;
}

export interface ReceiveChatState {
  type: ActionTypes.RECEIVE_CHAT_STATE;
  payload: ChatState
}

export interface UserDisconnected {
  type: ActionTypes.USER_DISCONNECTED;
  payload: string;
}

export interface NewRoom {
  type: ActionTypes.NEW_ROOM;
  payload: Room;
}

export interface DeleteRoom {
  type: ActionTypes.ROOM_DELETED;
  payload: string;
}

export interface CreateNewChatRoom {
  type: ActionTypes.CREATE_NEW_CHAT_ROOM;
  payload: {
    name: string;
    slots: number; 
    isProtected?: boolean; 
    password?: string;
  };
}


export const connectSocket = (): ConnectSocket => {
  return {
    type: ActionTypes.SOCKET_CONNECT,
    payload: null,
  }
}

export const disconnectSocket = (): DisconnectSocket => {
  return {
    type: ActionTypes.SOCKET_DISCONNECT,
    payload: null,
  }
}

export const createNewChatUser = (nickname: string, type: ChatUserType): CreateNewChatUser => {
  return {
    type: ActionTypes.CREATE_NEW_USER,
    payload: {
      nickname,
      type,
    },
  }
}

export const createNewChatRoom = (name: string, slots: number = 100, isProtected?: boolean, password?: string): CreateNewChatRoom => {
  return {
    type: ActionTypes.CREATE_NEW_CHAT_ROOM,
    payload: {
      name,
      slots,
      isProtected,
      password,
    },
  }
}

