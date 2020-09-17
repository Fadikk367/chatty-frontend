import { createStore, Middleware } from 'redux';
import io, {  } from 'socket.io-client';
import { Action, ActionTypes, Message, User } from '../actions';


const createSocketMiddleware = (): Middleware => {
  let socket: SocketIOClient.Socket | null = null;
  console.log('create socket middleware');

  return store => next => action => {
    switch(action.type) {
      case ActionTypes.SOCKET_CONNECT:
        if (socket)
          socket.close();

        socket = io.connect('http://localhost:3000');

        socket.on('message', (message: Message) => {
          console.log({message});
          next({
            type: ActionTypes.RECEIVE_MESSAGE,
            payload: message,
          })
        });

        socket.on('user-joined', (user: User) => {
          console.log('user-joined', user);
          next({
            type: ActionTypes.USER_JOINED,
            payload: user,
          })
        });

        socket.on('user-left', (user: User) => {
          next({
            type: ActionTypes.USER_LEFT,
            payload: user,
          })
        });

        console.log('socket connected');
        break;
      case ActionTypes.SOCKET_DISCONNECT:
        if(socket !== null)
          socket.close();

        socket = null;
        console.log('socket disconnected');
        break;
      case ActionTypes.SEND_MESSAGE:
        socket?.send({ ...action.payload });
        next(action);
        break;
      case ActionTypes.JOIN:
        console.log('join chat');
        socket?.emit('new-user', action.payload);
        next(action);
        break;
      case ActionTypes.LEAVE:
        socket?.emit('user-left', action.payload);
        next(action);
        break;
      default:
        return next(action);
    }
  }
};

export default createSocketMiddleware();