import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import NotFoundPage from '../NotFoundPage';

describe('NotFoundPage component', () => {
  it('matches to snapshot', () => {
    const renderedValue = renderer.create(
      <BrowserRouter>
        <NotFoundPage/>
      </BrowserRouter>,
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
