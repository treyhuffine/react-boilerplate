import React, { Component } from 'react';
import Page from 'pages/Page';
import Sample from 'components/Sample';

class SamplePage extends Component {
  render() {
    return (
      <Page>
        <Sample name='World'/>
      </Page>
    );
  }
}

export default SamplePage;
