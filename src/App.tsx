import React, { useState, useEffect, FormEvent} from 'react';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from './data/reducers';
import { sendMessage, Message, connectSocket, User, join } from './data/actions';

function App() {
  const dispatch = useDispatch();

  const [message, setMessage] = useState('');
  const [guestNick, setGuestNick] = useState('');
  const [roomName, setRoomName] = useState('');
  const [messageCount, setMessageCount] = useState(0);
  const [nick, setNick] = useState('');

  const messages = useSelector((state: StoreState) => state.chat.messages);
  const connectedUsers = useSelector((state: StoreState) => state.chat.connectedUsers);

  useEffect(() => {
    dispatch(connectSocket());

    axios.get('http://localhost:3000/test')
      .then(response => response.data)
      .then(data => console.log(data));

    const nick = prompt("Enter your nick:");
    if (nick) {
      dispatch(join({ nick, id: Math.random() }));
      setNick(nick);
    }
  }, []);

  const handleSendMessage = (e: FormEvent): void => {
    e.preventDefault();

    dispatch(sendMessage({
      content: message,
      author: nick,
      authorId: 0,
      id: messageCount
    }));

    setMessageCount(count => count + 1);
  }

  const handleCreateGuest = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const response = await axios.post(`http://localhost:3000/room/temporary/${roomName}/admin/${guestNick}`);
    console.log(response);
  }

  const renderMessage = (message: Message): JSX.Element => {
    return (
      <div key={message.id}>
        <h3>{message.author}: <span>{message.content}</span></h3>
      </div>
    )
  }

  const renderUser = (user: User): JSX.Element => {
    return (
      <div key={user.id}>
        <span>{user.nick}</span>
      </div>
    )
  }

  const renderedMessaged = messages.map(renderMessage);
  const renderedConnectedUsers = connectedUsers.map(renderUser);

  return (
    <div className="App">
      <form onSubmit={handleSendMessage}>
        <input type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder="your message..."/>
        <button type="submit">send</button>
      </form>
      {renderedMessaged}
      <div style={{ position: "fixed", right: 0}}>
        {renderedConnectedUsers}
      </div>
      <h2>Create room:</h2>
      <form onSubmit={handleCreateGuest}>
        <input type="text" value={guestNick} onChange={e => setGuestNick(e.target.value)} placeholder="enter yoru nick..."/><br/>
        <input type="text" value={roomName} onChange={e => setRoomName(e.target.value)} placeholder="enter room name..."/>
        <button type="submit">enter as guest</button>
      </form>
    </div>
  );
}

export default App;
