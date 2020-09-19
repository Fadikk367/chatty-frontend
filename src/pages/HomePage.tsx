import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../data/reducers';
import { createNewChatUser } from '../data/actions';
import { ChatUserType } from '../data/models';


const HomePage = () => {
  const [nickname, setNickname] = useState('');
  const userNickname = useSelector((state: StoreState) => state.user.nickname);
  const dispatch = useDispatch();

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
    <>
      <h2>Welcome to Chatty</h2>
      <h3>Your nickname: {userNickname}</h3>
      <form onSubmit={handleCreateChatUser}>
        <input type="text" value={nickname} onChange={e => setNickname(e.target.value)}/>
        <button type="submit">Create chat user</button>
      </form>
      <Link to='/chat/rooms'>Browse chat rooms</Link>
    </>
  )
}

export default HomePage;