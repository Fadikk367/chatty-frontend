import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import { createNewChatRoom } from 'data/actions';

import { FormWrapper, Label, Input, SubmitButton } from './CreateRoomForm.css';

const CreateRoomForm = () => {
  const [newRoomName, setNewRoomName] = useState('');
  const [roomSlots, setRoomSlots] = useState(2);
  const [isProtected, setIsProtected] = useState(false);
  const [password, setPassword] = useState('');
  const [tags, setTags] = useState([]);

  const dispatch = useDispatch();

  const handleCreateNewChatRoom = (e: FormEvent) => {
    e.preventDefault();

    dispatch(createNewChatRoom(newRoomName, roomSlots ? roomSlots : undefined));
  }

  return (
    <FormWrapper>
        <form onSubmit={handleCreateNewChatRoom}>
          <Label htmlFor="room-name">Name:</Label>
          <Input type="text" id="room-name" value={newRoomName} onChange={e => setNewRoomName(e.target.value)}/>
          <Label htmlFor="room-slots">Slots:</Label>
          <Input type="number" id="room-slots" min="2" max="10" value={roomSlots} onChange={e => setRoomSlots(parseInt(e.target.value))}/>
          <Label htmlFor="room-isProtected">Password protection:</Label>
          <Input type="checkbox" id="room-isProtected" checked={isProtected} onChange={e => setIsProtected(e.target.checked)}/>
          {isProtected ? (
          <>
            <Label htmlFor="room-password">Password:</Label>
            <Input type="password" id="room-password" value={password} onChange={e => setPassword(e.target.value)}/>
          </>) : null}
          <SubmitButton type="submit">create room</SubmitButton>
        </form>
    </FormWrapper>
  )
}

export default CreateRoomForm
