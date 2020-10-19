import React from 'react';

import { ListWrapper, HorizontalList, MemberItem } from './MemberList.css';
import { User } from 'data/models';

interface MemberListProps {
  members: User[]
}

const MemberList: React.FC<MemberListProps> = ({ members }) => {

  const renderedRoomMembers = members.map(member => (
    <MemberItem key={member.id}>{member.nick}</MemberItem>
  ));

  return (
    <ListWrapper>
      <HorizontalList>
        {renderedRoomMembers}
      </HorizontalList>
    </ListWrapper>
  )
}

export default MemberList
