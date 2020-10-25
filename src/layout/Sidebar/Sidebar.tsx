import { User } from 'data/models';
import { StoreState } from 'data/reducers';
import React from 'react';
import { useSelector } from 'react-redux';
import { ConnectedUserItem } from './components';
import { SidebarWrapper } from './Sidebar.css';

const Sidebar = () => {
  const users = useSelector((store: StoreState) => store.chat.connectedUsers);
  
  const renderConnectedUser = (user: User) => {
    return (
      <ConnectedUserItem key={user.id} nickname={user.nick} type={user.type}/>
      )
    }

  const renderedConnectedUsers = Object.values(users).map(renderConnectedUser);
  return (
    <SidebarWrapper>
      <h3>Connected users:</h3>
      <ul>
        {renderedConnectedUsers}
      </ul>
    </SidebarWrapper>
  )
}

export default Sidebar
