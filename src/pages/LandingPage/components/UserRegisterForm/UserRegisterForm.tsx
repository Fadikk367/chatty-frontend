import React from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper, Form, Input, InputLabel, ErrorMessage, SubmitButton } from './UserRegisterForm.css';

interface FormData {
  firstName: string;
  lastName: string;
  nickname: string;
  password: string;
  email: string;
}

const UserRegisterForm = () => {
  const { register, handleSubmit, errors } = useForm<FormData>();
  
  console.log({ errors });

  const handleFormSubmit = handleSubmit((formData: FormData) => {
    console.log(formData);
  })

  const inputRegister = {
    firstName: register({ 
      required: "This filed is required!" 
    }),
    lastName: register({ 
      required: "This filed is required!" 
    }),
    nickname: register({ 
      required: "This filed is required!", 
      minLength: {
        value: 3, 
        message: "Nickname have to be at least 3 letters long",
      },
      maxLength: {
        value: 15, 
        message: "Nickname can be 15 letters long at most",
      },
    }),
    password: register({ 
      required: "This filed is required!",
      pattern: {
        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        message: "Password too weak!",
      }
    }),
    email: register({ 
      required: "This filed is required!",
      pattern: {
        value:  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "invalid email!",
      } 
    }),
  }

  return (
    <FormWrapper>
      <Form onSubmit={handleFormSubmit}>
        <InputLabel>First name:</InputLabel>
        <Input name="firstName" id="firstName" ref={inputRegister.firstName} placeholder="first name"/>
        {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
        <InputLabel>Last name:</InputLabel>
        <Input name="lastName" ref={inputRegister.lastName} placeholder="last name"/>
        {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
        <InputLabel>Your nickname:</InputLabel>
        <Input name="nickname" ref={inputRegister.nickname} placeholder="nickname" />
        {errors.nickname && <ErrorMessage>{errors.nickname.message}</ErrorMessage>}
        <InputLabel>Password:</InputLabel>
        <Input type="password" name="password" ref={inputRegister.password} placeholder="password"/>
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        <InputLabel>Email address:</InputLabel>
        <Input name="email" ref={inputRegister.email} placeholder="email"/>
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <SubmitButton type="submit">Register</SubmitButton>
      </Form>
    </FormWrapper>
  )
}

export default UserRegisterForm;