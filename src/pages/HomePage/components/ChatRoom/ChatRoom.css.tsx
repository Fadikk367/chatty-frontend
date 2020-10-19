import styled from 'styled-components';

export const ChatRoomItem = styled.li`
  list-style-type: none;
  
  &:nth-child(even) {
    background-color: red;
  }

  a {
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
  }
`;