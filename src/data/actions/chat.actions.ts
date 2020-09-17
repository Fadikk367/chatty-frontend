import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Message {
  id: number;
  author: string;
  authorId: number;
  content: string;
}

export interface User {
  id: number;
  nick: string;
  socketId?: string;
}


export interface SendMessage {
  type: ActionTypes.SEND_MESSAGE;
  payload: Message;
}

export interface RecieveMessage {
  type: ActionTypes.RECEIVE_MESSAGE,
  payload: Message
}

export interface ConnectSocket {
  type: ActionTypes.SOCKET_CONNECT;
  payload: null;
}

export interface DiscnnectSocket {
  type: ActionTypes.SOCKET_DISCONNECT;
  payload: null;
}

export interface JoinUser {
  type: ActionTypes.USER_JOINED;
  payload: User;
}

export interface LeaveUser {
  type: ActionTypes.USER_LEFT;
  payload: User;
}

export interface Join {
  type: ActionTypes.JOIN;
  payload: User;
}

export interface Leave {
  type: ActionTypes.LEAVE;
  payload: User;
}


export const join = (user: User): Join => {
  return {
    type: ActionTypes.JOIN,
    payload: user,
  }
}

export const leave = (user: User): Leave => {
  return {
    type: ActionTypes.LEAVE,
    payload: user,
  }
}

export const joinUser = (user: User): JoinUser => {
  return {
    type: ActionTypes.USER_JOINED,
    payload: user,
  }
}

export const leaveUser = (user: User): LeaveUser => {
  return {
    type: ActionTypes.USER_LEFT,
    payload: user,
  }
}

export const sendMessage = (message: Message): SendMessage => {
  return {
    type: ActionTypes.SEND_MESSAGE,
    payload: message,
  }
}

export const connectSocket = (): ConnectSocket => {
  return {
    type: ActionTypes.SOCKET_CONNECT,
    payload: null,
  }
}

export const disconnectSocket = (message: Message): DiscnnectSocket => {
  return {
    type: ActionTypes.SOCKET_DISCONNECT,
    payload: null,
  }
}

