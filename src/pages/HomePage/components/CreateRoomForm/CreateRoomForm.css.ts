import styled from 'styled-components';

export const FormWrapper = styled.section`
  background-color: red;
  padding: 20px;
  width: 100%;
  height: 100%;

  form {
    display: flex;
    flex-direction: column;
    font-size: 1.1em;
    height: 100%;
    min-height: 400px;
  }
`;

export const Label = styled.label`
  padding: 5px 0;
`;

export const Input = styled.input`
  padding: 5px;
  font-size: 1.1em;
`;

export const SubmitButton = styled.button`
  margin-top: auto;
  padding: 7px;
  background-color: green;
  color: white;
  outline: none;
  border: none;
  font-size: 1.1em;
  border-radius: 5px;
`;