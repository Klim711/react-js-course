import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import FilmBlock from '../FilmBlock';

describe('FilmBlock component', () => {
  it('matches to snapshot', () => {
    const instance = {
      id: 711,
      poster_path: 'path',
      title: 'someTitle',
      genre: 'someGenre',
      year: 'someYear',
    };
    const renderedValue = renderer.create(
      <BrowserRouter>
        <FilmBlock instance={instance}/>
      </BrowserRouter>,
    ).toJSON();

    expect(renderedValue).toMatchSnapshot();
  });
});
