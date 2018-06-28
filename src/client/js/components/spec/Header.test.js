import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from '../Header';

configure({ adapter: new Adapter() });

describe('Header component', () => {
  let wrapper;

  it('renders the DUMB component', () => {
    wrapper = shallow(<Header/>);

    expect(wrapper.length).toEqual(1);
  });
});
