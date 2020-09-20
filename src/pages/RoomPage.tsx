import React, { FormEvent, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { StoreState } from '../data/reducers';
import { leaveRoom, sendChatMessage } from '../data/actions';
import { Message } from '../data/models';


const RoomPage = () => {
  const [currentMessage, setCurrentMessage] = useState('');
  // const messages = useSelector((store: StoreState) => store.chat.rooms[roomId].messages);
  // const { nickname, socketId } = useSelector((store: StoreState) => store.user);
  const { roomId } = useParams<{ roomId: string}>();
  const room = useSelector((state: StoreState) => state.chat.rooms[roomId]);
  const me = useSelector((state: StoreState) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();

  // const dispatch = useDispatch();
  
  const handleSendMessage = (e: FormEvent): void => {
    e.preventDefault();

    if (!currentMessage)
      return;

    const message = new Message(currentMessage, me.nickname, me.id as string);
    dispatch(sendChatMessage(message, roomId));
  }

  const handleLeaveRoom = () => {
    dispatch(leaveRoom(roomId));
    history.goBack();
  }

  const renderedRoomMembers = room?.members.map(member => (
    <li key={member.id}>{member.nick}</li>
  ))

  const renderMessage = (message: Message) => {
    return (
      <li key={message.timestamp}>
        <span>{message.author}: </span>
        <span>{message.content}</span>
      </li>
    )
  }

  const renderedMessages = room.messages.map(renderMessage);

  return (
    <>
      <h2>Room - {roomId} <button onClick={handleLeaveRoom}>leave</button></h2>
      <h3>Members:</h3>
      <ul>
        {renderedRoomMembers}
      </ul>
      <h3>Messages:</h3>
      <ul>
        {renderedMessages}
      </ul>
      <form onSubmit={handleSendMessage}>
        <input type="text" value={currentMessage} onChange={e => setCurrentMessage(e.target.value)}/>
        <button type="submit">Send</button>
      </form>
    </>
  )
}

export default RoomPage;