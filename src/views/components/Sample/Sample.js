import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from 'images/logo.svg';
import { Wrapper, Logo, Header, Intro } from './styles';

class Sample extends Component {
  static propTypes = {
    name: PropTypes.string,
  };

  static defaultProps = {
    name: 'World',
  };

  render() {
    const { name } = this.props;

    return (
      <Wrapper>
        <Header>
          <Logo src={logo} className="App-logo" alt="logo" />
          <h2>Hello, {name}! Welcome to React.</h2>
        </Header>
        <Intro>
          To get started, edit <code>src/component/Sample.js</code> and save to reload.
        </Intro>
      </Wrapper>
    );
  }
}

export default Sample;
