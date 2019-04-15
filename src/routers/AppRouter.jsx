import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../Components/App';
import Profile from '../Pages/Profile/Profile'
import Nav from '../Components/Nav/Nav'

const AppRouter = () => {

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path='/' component={App} exact={true} />
        <Route path='/profile' component={Profile} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter