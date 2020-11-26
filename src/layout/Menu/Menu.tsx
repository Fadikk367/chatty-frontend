import { StoreState } from 'data/reducers';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigation } from './components';

import { MenuWrapper } from './Menu.css';

const Menu = () => {
  const user = useSelector((store: StoreState) => store.auth.user);
  console.log(user);

  return (
    <MenuWrapper>
      {user ? <div>{user.firstName}<br />{user.lastName}</div> : null}
      <Navigation />
    </MenuWrapper>
  )
}

export default Menu
