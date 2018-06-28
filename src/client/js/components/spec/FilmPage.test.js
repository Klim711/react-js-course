import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import { initialState } from '../../reducers/movie';

import FilmPage from '../FilmPage';
import InfoPanel from '../InfoPanel';

configure({ adapter: new Adapter() });

describe('FilmPage component', () => {
  let wrapper;
  const mockStore = configureStore();
  let store;
  let match;

  it('renders component with InfoPanel if movie is defined', () => {
    store = mockStore({
      movie: {
        ...initialState,
        item: {},
      },
    });
    match = {
      params: {},
    };

    wrapper = shallow(<FilmPage store={store} match={match}/>);
    const infoPanel = wrapper.dive().find(InfoPanel);

    expect(infoPanel.length).toEqual(1);
  });

  it('renders component without InfoPanel if movie is not defined', () => {
    store = mockStore({
      movie: {
        ...initialState,
        item: null,
      },
    });
    match = {
      params: {},
    };

    wrapper = shallow(<FilmPage store={store} match={match}/>);
    const infoPanel = wrapper.dive().find(InfoPanel);

    expect(infoPanel.length).toEqual(0);
  });
});
