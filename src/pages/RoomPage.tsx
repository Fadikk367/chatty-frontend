import React, { FormEvent, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';

// import { StoreState } from '../data/reducers';
import {  } from '../data/actions';


const RoomPage = () => {
  const [currentMessage, setCurrentMessage] = useState('');
  // const messages = useSelector((store: StoreState) => store.chat.rooms[roomId].messages);
  // const { nickname, socketId } = useSelector((store: StoreState) => store.user);
  const { roomId } = useParams<{ roomId: string}>();
  const history = useHistory();

  // const dispatch = useDispatch();
  
  const handleSendMessage = (e: FormEvent): void => {
    e.preventDefault();

    if (!currentMessage)
      return;
  }

  const handleLeaveRoom = () => {
    history.goBack();
  }

  // const renderMessage = (message: Message) => {
  //   return (
  //     <li key={message.timestamp}>
  //       <span>{message.author}: </span>
  //       <span>{message.content}</span>
  //     </li>
  //   )
  // }

  // const renderedMessages = messages.map(renderMessage);

  return (
    <>
      <h2>Room - {roomId} <button onClick={handleLeaveRoom}>leave</button></h2>
      <ul>
        {/* {renderedMessages} */}
      </ul>
      <form onSubmit={handleSendMessage}>
        <input type="text" value={currentMessage} onChange={e => setCurrentMessage(e.target.value)}/>
        <button type="submit">Send</button>
      </form>
    </>
  )
}

export default RoomPage;