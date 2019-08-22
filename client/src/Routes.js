import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { include } from 'named-urls'
import { isAuthenticated } from './services/auth'

// views
import SignIn from './views/SignIn'
import SignUp from './views/SignUp'
import Dashboard from './views/Dashboard'

export const routes = {
  root: '/',
  auth: include('/auth', {
    signin: '/sign-in',
    signup: '/sign-up'
  })
}

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path={routes.root} component={Dashboard} />
        <Route exact path={routes.auth.signin} component={SignIn} />
        <Route exact path={routes.auth.signup} component={SignUp} />
        <Route exact path="/not-found" component={() => <h1>404</h1>} />
        <Redirect to="/not-found" />
      </Switch>
    </BrowserRouter>
  )
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  if (!isAuthenticated()) {
    return <Redirect to={{ pathname: routes.auth.signin }} />
  }

  return <Route {...rest} render={props => <Component {...props} />} />
}

export default Routes
