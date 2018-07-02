import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HomePage from '../HomePage';

configure({ adapter: new Adapter() });

describe('HomePage component', () => {
  let wrapper;

  it('renders the DUMB component', () => {
    wrapper = shallow(<HomePage/>);

    expect(wrapper.length).toEqual(1);
  });
});
