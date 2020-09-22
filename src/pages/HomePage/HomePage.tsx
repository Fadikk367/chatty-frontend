import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { HomePageWrapper, HomeLeft, HomeRight } from './HomePage.css';
import { UserLoginForm, GuestEnterForm } from './components';

import { StoreState } from '../../data/reducers';
import { ChatUserType } from '../../data/models';
import { createNewChatUser } from '../../data/actions';

import backgroundImage from '../../images/landing_background.png';

const HomePage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const userNickname = useSelector((state: StoreState) => state.user.nickname);
  const dispatch = useDispatch();

  const handleUserLogin = (e: FormEvent) => {
    e.preventDefault();

    if (!login || !password)
      return;
      
    console.log(`User login attempt: ${login}, ${password}`)
  }

  const handleCreateChatUser = (e: FormEvent) => {
    e.preventDefault();

    if (!nickname)
      return;
      
    dispatch(createNewChatUser(
      nickname,
      ChatUserType.GUEST,
    ));
  } 

  return (
    <HomePageWrapper>
      <HomeLeft>
        <img src={backgroundImage} alt="tło"/>
      </HomeLeft>
      <HomeRight>
        <h2>Welcome to Chatty</h2>
        <UserLoginForm />
        <GuestEnterForm />
        {/* <Link to='/chat/rooms'>Browse chat rooms</Link> */}
        </HomeRight>
    </HomePageWrapper>
  )
}

export default HomePage;