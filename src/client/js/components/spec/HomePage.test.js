import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import { initialState } from '../../reducers/movie';

import HomePage from '../HomePage';

configure({ adapter: new Adapter() });

describe('HomePage component', () => {
  let wrapper;
  const mockStore = configureStore();
  let store;

  it('renders the DUMB component', () => {
    store = mockStore({
      movie: {
        ...initialState,
      },
    });

    wrapper = shallow(<HomePage store={store}/>);

    expect(wrapper.length).toEqual(1);
  });
});
