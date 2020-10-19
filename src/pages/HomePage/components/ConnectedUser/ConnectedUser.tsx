import React from 'react';
import { ChatUserType } from '../../../../data/models';

import { ConnectedUserItem } from './ConnectedUser.css'

interface ConnectedUserProps {
  nickname: string;
  type: ChatUserType;
}

const ConnectedUser: React.FC<ConnectedUserProps> = ({ nickname, type }) => {
  return (
    <ConnectedUserItem>
      <span>{nickname}</span>
      <span>{type}</span>
    </ConnectedUserItem>
  )
}

export default ConnectedUser;