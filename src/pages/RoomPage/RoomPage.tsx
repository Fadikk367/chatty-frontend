import React  from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { RoomPageWraper, SectionTitle } from './RoomPage.css';
import { MemberList, ChatMessageForm, ChatHistory } from './components';

import { StoreState } from '../../data/reducers';
import { leaveRoom } from '../../data/actions';
import { Message } from '../../data/models';
import userEvent from '@testing-library/user-event';


const RoomPage = () => {
  // const messages = useSelector((store: StoreState) => store.chat.rooms[roomId].messages);
  // const { nickname, socketId } = useSelector((store: StoreState) => store.user);
  const { roomId } = useParams<{ roomId: string}>();
  const room = useSelector((state: StoreState) => state.chat.rooms[roomId]);
  const me = useSelector((state: StoreState) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  
  const handleLeaveRoom = () => {
    dispatch(leaveRoom(roomId));
    history.goBack();
  }

  return (
    <RoomPageWraper>
      <section>
        <SectionTitle>{room.name} - <button onClick={handleLeaveRoom}>leave</button></SectionTitle>
        <MemberList members={room.members}/>
        <ChatHistory messages={room.messages} userId={me.id as string}/>
        <ChatMessageForm user={me} roomId={roomId}/>
      </section>
    </RoomPageWraper>
  )
}

export default RoomPage;