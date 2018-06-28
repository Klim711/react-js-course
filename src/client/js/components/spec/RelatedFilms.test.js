import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import RelatedFilms from '../RelatedFilms';

configure({ adapter: new Adapter() });

describe('RelatedFilms component', () => {
  let wrapper;

  it('renders the DUMB component', () => {
    wrapper = shallow(<RelatedFilms/>);

    expect(wrapper.length).toEqual(1);
  });
});
