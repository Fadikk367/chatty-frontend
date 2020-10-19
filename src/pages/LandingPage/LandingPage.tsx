import React from 'react';

import { LandingPageWrapper, LandingLeft, LandingRight } from './LandingPage.css';
import { UserLoginForm, GuestEnterForm } from './components';

import backgroundImage from '../../images/landing_background.png';


const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <LandingLeft>
        <img src={backgroundImage} alt="tło"/>
      </LandingLeft>
      <LandingRight>
        <h2>Welcome to Chatty</h2>
        <UserLoginForm />
        <GuestEnterForm />
        {/* <Link to='/chat/rooms'>Browse chat rooms</Link> */}
        </LandingRight>
    </LandingPageWrapper>
  )
}

export default LandingPage;