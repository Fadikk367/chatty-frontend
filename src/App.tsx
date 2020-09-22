import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ChatsPage, RoomPage } from './pages';
import HomePage from './pages/HomePage';

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
        <Route path='/' exact component={HomePage} />
        <Route path='/chat/rooms' exact component={ChatsPage} />
        <Route path='/chat/room/:roomId' component={RoomPage} />
      </Switch>
    </div>
  );
}

export default App;
