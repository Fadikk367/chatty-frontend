import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { HomeWrapper, SectionTitle } from './HomePage.css';
import { ChatRoom, CreateRoomForm, FilterRoomsForm, ChatsBar } from './components';
import { Modal } from 'components';

import { StoreState } from 'data/reducers';
import { joinRoom } from 'data/actions';
import { Room } from 'data/models';


const HomePage = () => {
  const rooms = useSelector((store: StoreState) => store.chat.rooms);
  const me = useSelector((store: StoreState) => store.user);
  const dispatch = useDispatch();

  const handleJoinRoom = (roomId: string) => {
    const room = rooms[roomId];
    if (room.admin.nick === me.nickname)
      return;
    console.log(`join room: ${room.name}`);
    dispatch(joinRoom(roomId));
  }



  const renderAvailableChatRoom = (room: Room) => {
    return (
      <ChatRoom 
        key={room.id} 
        onClick={() => handleJoinRoom(room.id)} 
        {...room}
        to={`/rooms/${room.id}`}
      />
    )
  }

  const renderedAvailableChatRooms =  Object.values(rooms).map(renderAvailableChatRoom);
  return (
    <HomeWrapper>
      <ChatsBar />
      <SectionTitle>Available rooms: ({renderedAvailableChatRooms.length})</SectionTitle>
      <FilterRoomsForm />
      <Link to="/rooms/create/new">new room</Link>
      <ul>
        {renderedAvailableChatRooms}
      </ul>
      <Switch>
        <Route path="/rooms/create/new" exact>
          <Modal title="Create new chatroom">
            <CreateRoomForm />
          </Modal>
        </Route>
      </Switch>
    </HomeWrapper>
  )
}

export default HomePage;