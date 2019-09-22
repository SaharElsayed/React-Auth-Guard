import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Public from './Public';
import Private from './Private';
import Home from './Home';
import Auth from './Auth';

const Router = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/public' component={Public} />
        <PrivateRoute exact path='/private' component={Private} />
    </Switch>
)

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => Auth.getAuth() ? (<Component {...props} />) : (<Redirect to={{ pathname: '/' }} />)} />
)

export default Router;