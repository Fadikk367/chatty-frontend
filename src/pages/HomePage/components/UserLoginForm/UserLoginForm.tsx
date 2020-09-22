import React, { useState, FormEvent } from 'react';


import { 
  LoginFormWrapper, 
  LoginForm, 
  LoginFormInput, 
  LoginFormSubmitButton, 
  LoginFormTitle,
  ForgotPasswordLink,
} from './UserLoginForm.css';


const UserLoginForm = () => {
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');

  const handleUserLogin = (e: FormEvent) => {
    e.preventDefault();

    if (!login || !password)
      return;
      
    console.log(`User login attempt: ${login}, ${password}`)
  }

  return (
    <LoginFormWrapper>
      <LoginFormTitle>Have an account?</LoginFormTitle>
      <LoginForm onSubmit={handleUserLogin}>
        <LoginFormInput type="text" value={login} onChange={e => setLogin(e.target.value)} placeholder='username'/>
        <LoginFormInput type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='*******'/>
        <ForgotPasswordLink to="/">Forgot password?</ForgotPasswordLink>
        <LoginFormSubmitButton type="submit">Sign in</LoginFormSubmitButton>
      </LoginForm>
    </LoginFormWrapper>
  )
}


export default UserLoginForm;