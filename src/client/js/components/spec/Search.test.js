import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import { initialState } from '../../reducers/movies';

import Search from '../Search';

configure({ adapter: new Adapter() });

describe('Search component', () => {
  let wrapper;
  const mockStore = configureStore();
  let store;

  it('renders the DUMB component', () => {
    store = mockStore({
      movies: {
        ...initialState,
      },
    });

    wrapper = shallow(<Search store={store}/>);

    expect(wrapper.dive().length).toEqual(1);
  });
});
