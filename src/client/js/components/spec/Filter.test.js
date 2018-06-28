import React from 'react';
import renderer from 'react-test-renderer';

import Filter from '../Filter';

describe('Filter component', () => {
  it('matches to snapshot', () => {
    const value = 'activeValue';
    const items = [
      'mockValue1',
      value,
      'mockValue2',
    ];

    const renderedValue = renderer.create(<Filter value={value} items={items}/>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
