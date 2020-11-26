import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { loginUser } from 'data/actions';
import { useDispatch } from 'react-redux';


import { 
  LoginFormWrapper, 
  LoginForm, 
  LoginFormInput, 
  LoginFormSubmitButton, 
  LoginFormTitle,
  ForgotPasswordLink,
} from './UserLoginForm.css';

interface LoginFormData {
  email: string;
  password: string;
}


const UserLoginForm = () => {
  const { register, handleSubmit, errors } = useForm<LoginFormData>();
  const dispatch = useDispatch();
  console.log(errors);

  const inputRegister = {
    password: register({ 
      required: "This filed is required!",
    }),
    email: register({ 
      required: "This filed is required!",
      pattern: {
        value:  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "invalid email!",
      } 
    }),
  }

  const handleLoginFormSubmit = handleSubmit(async (formData: LoginFormData) => {
    dispatch(loginUser(formData.email, formData.password))
      // .then(() => {
      //   console.log('essa, poszłooo');
      // })
      // .catch(err => {
      //   console.log('dupa');
      // })
  });

  return (
    <LoginFormWrapper>
      <LoginFormTitle>Have an account?</LoginFormTitle>
      <LoginForm onSubmit={handleLoginFormSubmit}>
        <LoginFormInput type="text" name="email" ref={inputRegister.email} placeholder='email'/>
        {errors.email && <span>{errors.email.message}</span>}
        <LoginFormInput type="password" name="password" ref={inputRegister.password} placeholder='*******'/>
        {errors.password && <span>{errors.password.message}</span>}
        <ForgotPasswordLink to="/">Forgot password?</ForgotPasswordLink>
        <ForgotPasswordLink to="/welcome/register">Dont have an account?</ForgotPasswordLink>
        <LoginFormSubmitButton type="submit">Sign in</LoginFormSubmitButton>
      </LoginForm>
    </LoginFormWrapper>
  )
}


export default UserLoginForm;