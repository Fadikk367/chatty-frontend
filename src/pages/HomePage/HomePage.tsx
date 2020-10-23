import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { RoomPage } from 'pages';
import { HomeWrapper, SectionTitle } from './HomePage.css';
import { ChatRoom, ConnectedUser, CreateRoomForm, FilterRoomsForm } from './components';
import { Modal } from 'components';
import { Menu } from 'layout';

import { StoreState } from '../../data/reducers';
import { joinRoom } from '../../data/actions';
import { User, Room } from '../../data/models';


const HomePage = () => {
  const rooms = useSelector((store: StoreState) => store.chat.rooms);
  const users = useSelector((store: StoreState) => store.chat.connectedUsers);
  const me = useSelector((store: StoreState) => store.user);
  const dispatch = useDispatch();

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
        {...room}
        to={`/chat/rooms/${room.id}`}
      />
    )
  }

  const renderedConnectedUsers = Object.values(users).map(renderConnectedUser);
  const renderedAvailableChatRooms =  Object.values(rooms).map(renderAvailableChatRoom);
  return (
    <HomeWrapper>
      <Menu />
      <section>
        <Switch>
          <Route path="/chat/rooms/:roomId" exact>
            <RoomPage />
          </Route>
          <Route path="/chat/rooms">
            <SectionTitle>Available rooms: ({renderedAvailableChatRooms.length})</SectionTitle>
            <FilterRoomsForm />
            <Link to="/chat/rooms/create/new">new room</Link>
            <ul>
              {renderedAvailableChatRooms}
            </ul>
          </Route>
        </Switch>
      </section>
      <section>
        <SectionTitle>Connected users: ({renderedConnectedUsers.length})</SectionTitle>
        <ul>
          {renderedConnectedUsers}
        </ul>
      </section>
      <Switch>
        <Route path="/chat/rooms/create/new" exact>
          <Modal title="Create new chatroom">
            <CreateRoomForm />
          </Modal>
        </Route>
      </Switch>
    </HomeWrapper>
  )
}

export default HomePage;