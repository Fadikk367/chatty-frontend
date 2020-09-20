import { DisconnectSocket, ConnectSocket, CreateNewChatUser, NewUser, ReceiveChatState, UserDisconnected, NewRoom, CreateNewChatRoom, DeleteRoom, JoinRoom, LeaveRoom, UserJoinedRoom, UserLeftRoom, WelcomeToRoom, ReceiveChatMessage, SendChatMessage } from './chat.actions';

export enum ActionTypes {
  SOCKET_CONNECT = 'SOCKET_CONNECT',
  SOCKET_DISCONNECT = 'SOCKET_DISCONNECT',
  CREATE_NEW_USER = 'CREATE_NEW_USER',
  NEW_USER = 'NEW_USER',
  RECEIVE_CHAT_STATE = 'RECEIVE_CHAT_STATE',
  USER_DISCONNECTED = 'USER_DISCONNECTED',
  NEW_ROOM = 'NEW_ROOM',
  CREATE_NEW_CHAT_ROOM = 'CREATE_NEW_CHAT_ROOM',
  ROOM_DELETED = 'ROOM_DELETED',
  USER_JOINED_ROOM = 'USER_JOINED_ROOM',
  USER_LEFT_ROOM = 'USER_LEFT_ROOM',
  JOIN_ROOM = 'JOIN_ROOM',
  LEAVE_ROOM = 'LEAVE_ROOM',
  WELCOME_TO_ROOM = 'WELCOME_TO_ROOM',
  RECEIVE_CHAT_MESSAGE = 'RECEIVE_CHAT_MESSAGE',
  SEND_CHAT_MESSAGE = 'SEND_CHAT_MESSAGE',
};

export type Action = 
  ConnectSocket | 
  DisconnectSocket |
  CreateNewChatUser |
  NewUser |
  ReceiveChatState |
  UserDisconnected |
  NewRoom |
  CreateNewChatRoom |
  DeleteRoom |
  JoinRoom |
  LeaveRoom | 
  UserJoinedRoom |
  UserLeftRoom |
  WelcomeToRoom |
  ReceiveChatMessage |
  SendChatMessage;