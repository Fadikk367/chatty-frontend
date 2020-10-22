import React from 'react';
import { Link } from 'react-router-dom';
import { Room } from 'data/models';
import { ChatRoomItem, RoomLink } from './ChatRoom.css';

interface ChatRoomProps extends Room {
  key: string;
  onClick: () => void;
  to: string;
}

const ChatRoom: React.FC<ChatRoomProps> = ({ name, members, to, onClick, slots, isProtected }) => {
  return (
    <ChatRoomItem onClick={onClick}>
      <RoomLink to={to}>
        <span>{1}</span>
        <span>{name} - {isProtected ? 'locked' : 'open'}</span>
        <span>{members.length}/{slots}</span>
      </RoomLink>
    </ChatRoomItem>
  )
}

export default ChatRoom;