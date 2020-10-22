import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { LandingPage, HomePage } from './pages';

import { useDispatch } from 'react-redux';
import { connectSocket } from './data/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connectSocket());

  }, [dispatch]);


  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/chat/rooms' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
