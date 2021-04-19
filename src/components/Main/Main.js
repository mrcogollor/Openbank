import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Page from '../Page/Page';

import Home from '../../pages/Home/Home';
import Wizard from '../../pages/Wizard/Wizard';
import NoMatch from '../../pages/NoMatch/NoMatch';

class Main extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return (
      <main className="container">
        <Switch>
          <Route exact path="/" render={(props) => <Page {...props} component={Home} title="Home | Openbank Test" />} />
          <Route
            exact
            path="/form"
            render={(props) => <Page {...props} component={Wizard} title="Password Manager | Openbank Test" />}
          />
          <Route
            path="/error"
            render={(props) => <Page {...props} component={NoMatch} title="Page not found | Openbank Test" />}
          />
          <Redirect from="*" to="/error" />
        </Switch>
      </main>
    );
  }
}

export default Main;
