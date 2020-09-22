import styled from 'styled-components';

export const GuestFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const GuestFormTitle = styled.h3`
  padding: 10px;
  font-size: 1.3em;
  font-weight: 500;
  margin-bottom: 10px;
  border-bottom: 1px solid #123c80;
`;

export const GuestForm = styled.form`
  display: flex;
`;

export const GuestNicknameInput = styled.input`
  outline: none;
  border: none;
  width: 200px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 10px;
  margin: 5px 0;
  font-size: 1.1em;
`;

export const GuestEnterButton = styled.button`
  width: 100px;
  outline: none;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 10px;
  margin: 5px 0;
  background: #123c80;
  cursor: pointer;
  color: white;
  font-size: 1.1em;
`;