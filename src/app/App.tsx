import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router';

import Main from './main/MainContainer';
import Fun from './fun/Fun';

import './App.scss';

@withRouter
export default class App extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={Main} />
        <Route exact={true} path="/fun" component={Fun} />
      </Switch>
    );
  }
}
