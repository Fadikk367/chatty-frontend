import { Middleware } from 'redux';
import io from 'socket.io-client';
import { Action, ActionTypes } from '../actions';
import { User, Room } from '../models';


const createSocketMiddleware = (): Middleware => {
  let socket: SocketIOClient.Socket | null = null;
  console.log('create socket middleware');

  return store => next => (action: Action) => {
    switch(action.type) {
      case ActionTypes.SOCKET_CONNECT:
        if (socket)
          socket.close();

        socket = io.connect('http://localhost:3000');

        socket.on('new-user', (user: User) => {
          next({
            type: ActionTypes.NEW_USER,
            payload: user,
          });
        });

        socket.on('new-room', (room: Room) => {
          next({
            type: ActionTypes.NEW_ROOM,
            payload: room,
          });
        });

        socket.on('room-deleted', (roomId: string) => {
          next({
            type: ActionTypes.ROOM_DELETED,
            payload: roomId,
          });
        });

        socket.on('user-disconnected', (userId: string) => {
          next({
            type: ActionTypes.USER_DISCONNECTED,
            payload: userId,
          });
        });

        socket.on('chat-state', (chatState: { connectedUsers: User[], availableRooms: Room[] }) => {
          next({
            type: ActionTypes.RECEIVE_CHAT_STATE,
            payload: chatState,
          });
        });

        console.log('socket connected');
        break;
      case ActionTypes.CREATE_NEW_USER:
        socket?.emit('new-user', action.payload);
        next(action);
        break;
      case ActionTypes.CREATE_NEW_CHAT_ROOM:
        socket?.emit('new-room', action.payload);
        break;
      default:
        return next(action);
    }
  }
};

export default createSocketMiddleware();