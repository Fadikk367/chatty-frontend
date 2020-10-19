import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import { MessageForm, MessageInput, SendButton } from './ChatMessageForm.css';

import { sendChatMessage } from 'data/actions';
import { Message } from 'data/models';


interface ChatMessageFormProps {
  user: {
    nickname: string;
    loggedIn: boolean;
    myRooms: string[];
    id?: string;
  };
  roomId: string;
}

const ChatMessageForm: React.FC<ChatMessageFormProps> = ({ user, roomId }) => {
  const { nickname, id } = user;
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const handleSendMessage = (e: FormEvent): void => {
    e.preventDefault();

    if (!message)
      return;

    const newMessage = new Message(message, nickname, id as string);
    setMessage('');
    dispatch(sendChatMessage(newMessage, roomId));
  }

  return (
    <MessageForm onSubmit={handleSendMessage}>
      <MessageInput type="text" value={message} onChange={e => setMessage(e.target.value)}/>
      <SendButton type="submit">Send</SendButton>
    </MessageForm>
  )
}

export default ChatMessageForm;
