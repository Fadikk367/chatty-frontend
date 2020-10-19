import React from 'react';
import { Link } from 'react-router-dom';

import { ChatRoomItem } from './ChatRoom.css';

interface ChatRoomProps {
  key: string;
  name: string;
  membersCount: number;
  onClick: () => void;
  to: string;
}

const ChatRoom: React.FC<ChatRoomProps> = ({ name, membersCount, to, onClick }) => {
  return (
    <ChatRoomItem onClick={onClick}>
      <Link to={to}>
      <span>{1}</span>
      <span>{name}</span>
      <span>{membersCount}</span>
      </Link>
    </ChatRoomItem>
  )
}

export default ChatRoom;