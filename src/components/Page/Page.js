import React, { Component } from 'react';

export default class Page extends Component {
  constructor(props, context) {
    super(props);
  }

  componentDidMount() {
    document.title = this.props.title;
  }

  componentDidUpdate() {
    document.title = this.props.title;
  }

  render() {
    const PageComponent = this.props.component;

    return <PageComponent />;
  }
}
