import React from 'react';

import { HistoryWrapper, MessageList, ChatMessage } from './ChatHistory.css';
import { Message } from 'data/models';

interface ChatHostoryProps {
  messages: Message[];
  userId: string;
}

const ChatHistory: React.FC<ChatHostoryProps> = ({ messages, userId }) => {
  const renderMessage = (message: Message) => {
    return (
      <ChatMessage key={message.timestamp} isMine={message.authorId === userId}>
        <span>{message.author}: </span>
        <span>{message.content}</span>
      </ChatMessage>
    )
  }

  console.log({messages});

  const renderedMessages = messages.map(renderMessage);

  return (
    <HistoryWrapper>
      <MessageList>
        {renderedMessages}
      </MessageList>
    </HistoryWrapper>
  )
}

export default ChatHistory
