import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { StoreState } from '../data/reducers';
import { createNewChatRoom, joinRoom } from '../data/actions';
import { User, Room } from '../data/models';


const ChatsPage = () => {
  const rooms = useSelector((store: StoreState) => store.chat.rooms);
  const users = useSelector((store: StoreState) => store.chat.connectedUsers);
  const me = useSelector((store: StoreState) => store.user);

  const [newRoomName, setNewRoomName] = useState('');
  const [roomSlots, setRoomSlots] = useState(0);

  const dispatch = useDispatch();

  const handleCreateNewChatRoom = (e: FormEvent) => {
    e.preventDefault();

    dispatch(createNewChatRoom(newRoomName, roomSlots ? roomSlots : undefined));
  }

  const handleJoinRoom = (roomId: string) => {
    const room = rooms[roomId];
    if (room.admin.nick === me.nickname)
      return;
    
    dispatch(joinRoom(roomId));
  }

  const renderConnectedUser= (user: User) => {
    return (
      <li key={user.id}>
        {user.nick}
      </li>
    )
  }

  const renderAvailableChatRoom = (room: Room) => {
    return (
      <li key={room.id} onClick={() => handleJoinRoom(room.id)}>
        <Link to={`/chat/room/${room.id}`}>{room.name}</Link>
        <span>{room.members.length}</span>
      </li>
    )
  }

  const renderedConnectedUsers = Object.values(users).map(renderConnectedUser);
  const renderedAvailableChatRooms =  Object.values(rooms).map(renderAvailableChatRoom);
  return (
    <>
      <h2>Chats Page</h2>
      <h3>Create new room:</h3>
      <form onSubmit={handleCreateNewChatRoom}>
        <input type="text" value={newRoomName} onChange={e => setNewRoomName(e.target.value)}/>
        <input type="number" value={roomSlots} onChange={e => setRoomSlots(parseInt(e.target.value))}/>
        <button type="submit">create room</button>
      </form>
      <h3>Connected users: ({renderedConnectedUsers.length})</h3>
      <ul>
        {renderedConnectedUsers}
      </ul>
      <h3>Available rooms: ({renderedAvailableChatRooms.length})</h3>
      <ul>
        {renderedAvailableChatRooms}
      </ul>
    </>
  )
}

export default ChatsPage;