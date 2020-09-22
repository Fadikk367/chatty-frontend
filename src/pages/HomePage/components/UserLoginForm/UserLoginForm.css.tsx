import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginFormWrapper = styled.div`

`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const LoginFormTitle = styled.h3`
padding: 10px;
font-size: 1.3em;
font-weight: 500;
margin-bottom: 10px;
border-bottom: 1px solid #123c80;
`;

export const LoginFormInput = styled.input`
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin: 5px 0;
  font-size: 1.1em;
`;

export const LoginFormSubmitButton = styled.button`
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 10px 15px;
  margin: 15px 0;

  text-transform: uppercase;
  cursor: pointer;
  color: white;
  letter-spacing: 2px;
  background: #123c80;
  font-size: 1.1em;
`;

export const ForgotPasswordLink = styled(Link)`
  color: black;
  text-decoration: none;
  align-self: flex-start;

  &:hover {
    text-decoration: underline;
  }
`;