import React, { FormEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { HomeWrapper, SectionTitle } from './HomePage.css';
import { ChatRoom, ConnectedUser } from './components';

import { StoreState } from '../../data/reducers';
import { createNewChatRoom, joinRoom } from '../../data/actions';
import { User, Room } from '../../data/models';


const HomePage = () => {
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
    console.log(`join room: ${room.name}`);
    dispatch(joinRoom(roomId));
  }

  const renderConnectedUser= (user: User) => {
    return (
      <ConnectedUser key={user.id} nickname={user.nick} type={user.type}/>
    )
  }

  const renderAvailableChatRoom = (room: Room) => {
    return (
      <ChatRoom 
        key={room.id} 
        onClick={() => handleJoinRoom(room.id)} 
        membersCount={room.members.length}
        name={room.name}
        to={`/chat/rooms/${room.id}`}
      />
    )
  }

  const renderedConnectedUsers = Object.values(users).map(renderConnectedUser);
  const renderedAvailableChatRooms =  Object.values(rooms).map(renderAvailableChatRoom);
  return (
    <HomeWrapper>
      <section>
        <SectionTitle>Create new room:</SectionTitle>
        <form onSubmit={handleCreateNewChatRoom}>
          <input type="text" value={newRoomName} onChange={e => setNewRoomName(e.target.value)}/>
          <input type="number" value={roomSlots} onChange={e => setRoomSlots(parseInt(e.target.value))}/>
          <button type="submit">create room</button>
        </form>
        <SectionTitle>Available rooms: ({renderedAvailableChatRooms.length})</SectionTitle>
        <ul>
          {renderedAvailableChatRooms}
        </ul>
      </section>
      <section>
        <SectionTitle>Connected users: ({renderedConnectedUsers.length})</SectionTitle>
        <ul>
          {renderedConnectedUsers}
        </ul>
      </section>

    </HomeWrapper>
  )
}

export default HomePage;