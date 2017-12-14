import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SamplePage from 'pages/SamplePage';
import NoMatch from 'pages/NoMatch';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={SamplePage}/>
        <Route component={NoMatch}/>
      </Switch>
    );
  }
}

export default Routes;
