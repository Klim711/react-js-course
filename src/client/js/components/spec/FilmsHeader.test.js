import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import { initialState } from '../../reducers/movies';

import FilmsHeader from '../FilmsHeader';

configure({ adapter: new Adapter() });

describe('FilmsHeader component', () => {
  let wrapper;
  const mockStore = configureStore();
  let store;

  it('renders the DUMB component', () => {
    store = mockStore({
      movies: {
        ...initialState,
      },
    });

    wrapper = shallow(<FilmsHeader store={store}/>);

    expect(wrapper.dive().length).toEqual(1);
  });
});
