import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import {createStore} from 'redux';

import {initialState, movie} from '../../reducers/movie';

import FilmPage from '../FilmPage';

configure({adapter: new Adapter()});

describe('FilmPage component', function () {
  let wrapper;
  const mockStore = configureStore();
  let store;

  it('renders DUMB component', () => {
    store = mockStore({
      movie: {
        ...initialState,
      },
    });

    wrapper = shallow(<FilmPage store={store}/>);

    expect(wrapper.length).toEqual(1);
  });

  // it('renders only footer if no movie in store', () => {
  //   store = mockStore({
  //     movie: {
  //       ...initialState,
  //     },
  //   });

  //   wrapper = shallow(<FilmPage store={store}/>);

  //   const container = wrapper.find('Footer');
  //   expect(container.length).toEqual(1);
  // });
});