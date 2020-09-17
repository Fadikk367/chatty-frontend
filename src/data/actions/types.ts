import { SendMessage, RecieveMessage, DiscnnectSocket, ConnectSocket, JoinUser, LeaveUser, Join, Leave } from './chat.actions';

export enum ActionTypes {
  SEND_MESSAGE = 'SEND_MESSAGE',
  RECEIVE_MESSAGE = 'RECIEVE_MESSAGE',
  SOCKET_CONNECT = 'SOCKET_CONNECT',
  SOCKET_DISCONNECT = 'SOCKET_DISCONNECT',
  USER_JOINED = 'USER_JOINED',
  USER_LEFT = 'USER_LEFT',
  JOIN = 'JOIN',
  LEAVE = 'LEAVE',
};

export type Action = SendMessage | RecieveMessage | DiscnnectSocket | ConnectSocket | JoinUser | LeaveUser | Join | Leave;