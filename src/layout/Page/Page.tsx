import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { HomePage, RoomPage, SettingsPage } from 'pages';

const Page = () => {
  return (
    <>
      <Switch>
        <Route path='/' exact>
          <Redirect to='rooms'/>
        </Route>
        <Route path='/rooms/:roomId' exact component={RoomPage}/>
        <Route path='/rooms' component={HomePage}/>
        <Route path='/settings' component={SettingsPage}/>
      </Switch>
    </>
  )
}

export default Page
