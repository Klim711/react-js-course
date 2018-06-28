import React from 'react';
import renderer from 'react-test-renderer';

import Footer from '../Footer';

describe('Footer component', () => {
  it('matches to snapshot', () => {
    const renderedValue = renderer.create(<Footer/>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
