import React, { Component } from 'react';

import Main from '../Main/Main';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import { withRouter } from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 'en',
    };
  }

  render() {
    return (
      <div className="App">
        <ScrollToTop>
          <Main />
        </ScrollToTop>
      </div>
    );
  }
}

export default withRouter(App);
