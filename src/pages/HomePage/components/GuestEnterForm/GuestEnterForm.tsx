import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { 
  GuestFormWrapper,
  GuestFormTitle,
  GuestForm,
  GuestNicknameInput,
  GuestEnterButton,
} from './GuestEnterForm.css';

import { createNewChatUser } from '../../../../data/actions';
import { ChatUserType } from '../../../../data/models';


const GuestEnterForm = () => {
  const [nickname, setNickname] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleGuestEnter = (e: FormEvent) => {
    e.preventDefault();

    if (!nickname)
      return;
      
    console.log(`Guest enter attempt: ${nickname}`);
    dispatch(createNewChatUser(nickname, ChatUserType.GUEST));
    history.push('/chat/rooms');
  }

  return (
    <GuestFormWrapper>
      <GuestFormTitle>Enter as guest:</GuestFormTitle>
      <GuestForm onSubmit={handleGuestEnter}>
        <GuestNicknameInput type="text" value={nickname} onChange={e => setNickname(e.target.value)} placeholder='nickname'/>
        <GuestEnterButton type="submit">Join</GuestEnterButton>
      </GuestForm>
    </GuestFormWrapper>
  )
}


export default GuestEnterForm;