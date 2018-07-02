import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import { initialState } from '../../reducers/movies';

import Main from '../Main';
import FilmsHeader from '../FilmsHeader';

configure({ adapter: new Adapter() });

describe('Main component', () => {
  let wrapper;
  const mockStore = configureStore();
  let store;

  it('renders the DUMB component without FilmsHeader if no items', () => {
    store = mockStore({
      movies: {
        ...initialState,
      },
    });

    wrapper = shallow(<Main store={store}></Main>);
    const header = wrapper.dive().find(FilmsHeader);

    expect(header.length).toEqual(0);
  });

  it('renders the DUMB component with FilmsHeader if there is items', () => {
    store = mockStore({
      movies: {
        ...initialState,
        items: [1, 2, 3],
      },
    });

    wrapper = shallow(<Main store={store}/>);
    const header = wrapper.dive().find(FilmsHeader);

    expect(header.length).toEqual(1);
  });
});
