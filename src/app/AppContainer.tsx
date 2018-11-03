import * as React from 'react';
import { createBrowserHistory } from 'history';
import { Provider } from 'mobx-react';
import { syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router';
import DevTools from 'mobx-react-devtools';

import Stores from '../stores';
import App from './App';

const browserHistory = createBrowserHistory();
const historyWithStore = syncHistoryWithStore(browserHistory, Stores.router);

export default class AppContainer extends React.Component {
  public render() {
    return (
      <Provider stores={Stores}>
        <Router history={historyWithStore}>
          <div>
            <App/>
            {process.env.NODE_ENV !== 'production' &&
              <DevTools/>
            }
          </div>
        </Router>
      </Provider>
    );
  }
}
