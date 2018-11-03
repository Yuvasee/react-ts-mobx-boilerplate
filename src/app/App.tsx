import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router';

import Main from './main/Main';

import './App.scss';

@withRouter
export default class App extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={Main} />
      </Switch>
    );
  }
}
