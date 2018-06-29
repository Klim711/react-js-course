import React from 'react';
import renderer from 'react-test-renderer';

import EmptyList from '../EmptyList';

describe('EmptyList component', () => {
  it('matches to snapshot', () => {
    const renderedValue =  renderer.create(<EmptyList content="some content"/>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});