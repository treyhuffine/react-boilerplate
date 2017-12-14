import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes/index';
import store from 'store/configureStore';

import 'styles/global';

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router>
            <Routes/>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default Root;
