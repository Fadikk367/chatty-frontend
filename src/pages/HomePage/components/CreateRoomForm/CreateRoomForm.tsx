import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import { createNewChatRoom } from 'data/actions';

import { FormWrapper } from './CreateRoomForm.css';

const CreateRoomForm = () => {
  const [newRoomName, setNewRoomName] = useState('');
  const [roomSlots, setRoomSlots] = useState(0);

  const dispatch = useDispatch();

  const handleCreateNewChatRoom = (e: FormEvent) => {
    e.preventDefault();

    dispatch(createNewChatRoom(newRoomName, roomSlots ? roomSlots : undefined));
  }

  return (
    <FormWrapper>
        <form onSubmit={handleCreateNewChatRoom}>
          <input type="text" value={newRoomName} onChange={e => setNewRoomName(e.target.value)}/>
          <input type="number" value={roomSlots} onChange={e => setRoomSlots(parseInt(e.target.value))}/>
          <button type="submit">create room</button>
        </form>
    </FormWrapper>
  )
}

export default CreateRoomForm
