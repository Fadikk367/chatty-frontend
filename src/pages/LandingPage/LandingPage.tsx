import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';

import { LandingPageWrapper, LandingLeft, LandingRight } from './LandingPage.css';
import { UserLoginForm, GuestEnterForm, UserRegisterForm } from './components';

import backgroundImage from '../../images/landing_background.png';


const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <LandingLeft>
        <img src={backgroundImage} alt="tło"/>
      </LandingLeft>
      <LandingRight>
        <h2>Welcome to Chatty</h2>
        <Switch>
          <Route path="/welcome/register" exact>
            <UserRegisterForm />
          </Route>
          <Route path="/welcome">
            <UserLoginForm />
            <GuestEnterForm />
          </Route>
        </Switch>
      </LandingRight>
    </LandingPageWrapper>
  )
}

export default LandingPage;