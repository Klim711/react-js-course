import React from 'react';
import renderer from 'react-test-renderer';

import FilmsCriteria from '../FilmsCriteria';

describe('FilmsCriteria component', () => {
  it('matches to snapshot', () => {
    const renderedValue = renderer.create(<FilmsCriteria criteriaValue="mockValue" criteria="mockCriteria"/>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
