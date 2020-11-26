import React, { useEffect } from 'react';
import { Switch, Link, Route, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StoreState } from 'data/reducers';

import { LandingPageWrapper, LandingLeft, LandingRight } from './LandingPage.css';
import { UserLoginForm, GuestEnterForm, UserRegisterForm } from './components';

import backgroundImage from '../../images/landing_background.png';


const LandingPage = () => {
  const isLoggedIn = useSelector((store: StoreState) => store.auth.isLoggedIn);
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/rooms');
    }
  }, [isLoggedIn, history]);
  
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