import styled from 'styled-components';

export const HistoryWrapper = styled.section`
  padding: 20px;
  background-color: lightpink;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const MessageList = styled.ul`
  height: 100%;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  overflow-y: scroll;
`;

export const ChatMessage = styled.li((props: { isMine: boolean }) => ({
  padding: '10px',
  margin: '5px 0',
  maxWidth: '70%',
  borderRadius: '10px',
  alignSelf: props.isMine ? 'flex-end' : 'flex-start',
  backgroundColor: props.isMine ? 'lightskyblue' : 'grey',
}));