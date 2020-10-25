import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { LandingPage, HomePage } from './pages';
import { Menu, Page, Sidebar, Footer } from 'layout';

import { connectSocket } from 'data/actions';
import { AppWrapper } from 'App.css';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connectSocket());
  }, [dispatch]);

  return (
    <AppWrapper>
      <Switch>
        <Route path='/welcome' component={LandingPage}/>
        <Route path='/'>
          <aside>
            <Menu />
            <Footer />
          </aside>
          <main>
            <Page />
          </main>
          <aside>
            <Sidebar />
          </aside>
        </Route>
      </Switch>
    </AppWrapper>
  );
}

export default App;
