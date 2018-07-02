import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import InfoPanel from '../InfoPanel';

describe('InfoPanel component', () => {
  it('matches to snapshot', () => {
    const film = {
      poster_path: 'mockPath',
      vote_average: 'mockVote',
      release_date: 'mockDate',
      runtime: 'mockRuntime',
      overview: 'mockOverview',
    };

    const renderedValue = renderer.create(
      <BrowserRouter>
        <InfoPanel film={film}/>
      </BrowserRouter>,
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
