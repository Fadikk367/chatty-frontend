import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ChatRoomItem = styled.li`
  list-style-type: none;
  
  &:nth-child(even) {
    background-color: red;
  }
`;

export const RoomLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 5px 10px;
  display: flex;
  font-size: 1.1em;

  span:nth-child(1) {

  }

  span:nth-child(2) {
    flex-grow: 1;

  }

  span:nth-child(3) {

  }
`;