import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Routes from 'routes';
import store from 'store/configureStore';
import history from 'routes/history';

import 'styles/global';

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <ConnectedRouter history={history}>
            <Routes/>
          </ConnectedRouter>
        </div>
      </Provider>
    );
  }
}

export default Root;
