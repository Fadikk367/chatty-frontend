import React, { useRef, useEffect } from 'react';

import { HistoryWrapper, MessageList, ChatMessage } from './ChatHistory.css';
import { Message } from 'data/models';

interface ChatHostoryProps {
  messages: Message[];
  userId: string;
}

const ChatHistory: React.FC<ChatHostoryProps> = ({ messages, userId }) => {
  const messageListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    console.log(messageListRef);
    const listScrollHeight = messageListRef.current?.scrollHeight;
    messageListRef.current?.scrollTo(0, listScrollHeight as number);
  })

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
      <MessageList ref={messageListRef}>
        {renderedMessages}
      </MessageList>
    </HistoryWrapper>
  )
}

export default ChatHistory
