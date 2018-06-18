import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HomePage from '../HomePage';

configure({adapter: new Adapter()});

describe('HomePage component', function () {
  let wrapper;

  beforeEach(() => { 
    wrapper = shallow(<HomePage/>);
  });

  it('renders the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });
});