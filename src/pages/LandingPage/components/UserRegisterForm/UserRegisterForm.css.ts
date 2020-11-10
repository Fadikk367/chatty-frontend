import styled, { css } from 'styled-components';

export const FormWrapper = styled.div`

`;

export const Form = styled.form`
  width: 300px;
  padding: 20px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: none;
  outline: none;
  font-size: 1.1em;
  margin-bottom: 5px;
`;

export const InputLabel = styled.label`
  padding: 5px;
  border-radius: 3px;
  font-size: 1.1em;
  margin-bottom: 5px;
`;

export const ErrorMessage = styled.span`
  padding: 5px;
  border-radius: 3px;
  font-size: 0.9em;
  background-color: red;
  margin-bottom: 5px;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  border-radius: 3px;
  font-size: 1.1em;
  color: white;
  margin: 10px 0;
  background-color: darkblue;
`;