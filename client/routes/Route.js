import React from 'react';
import { IndexRoute, Route, Redirect } from 'react-router';

import ViewerQuery from './ViewerQuery';
import AppContainer from '../components/App/AppContainer';
import SignupComponent from '../components/Signup/SignupComponent';
import LoginComponent from '../components/Login/LoginComponent';

export default (
  <Route path='/' component={AppContainer} queries={ViewerQuery}>
<<<<<<< HEAD
        <Route path='/signup' component={SignupComponent} />
=======
    <IndexRoute component={FeatureContainer} queries={ViewerQuery} />
    <Route path='/signup' component={SignupComponent} />
>>>>>>> 9b10026eef63ca7f4c1a82c11afa196de2632082
    <Route path='/login' component={LoginComponent} />
    <Redirect from='*' to='/' />
  </Route>
);

