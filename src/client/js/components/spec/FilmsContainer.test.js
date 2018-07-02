import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FilmsContainer from '../FilmsContainer';

configure({ adapter: new Adapter() });

describe('FilmsContainer component', () => {
  let wrapper;

  it('renders <EmptyList/> if no items', () => {
    wrapper = shallow(<FilmsContainer items={[]}/>);

    expect(wrapper.find('EmptyList').length).toBe(1);
  });

  it('renders <FilmBlock/> for each element in items', () => {
    const items = [{ id: 1 }, { id: 2 }, { id: 3 }];

    wrapper = shallow(<FilmsContainer items={items}/>);
    const blocks = wrapper.find('FilmBlock');

    expect(items.length).toBe(blocks.length);
    blocks.forEach((block, index) => {
      expect(block.props().instance).toEqual(items[index]);
    });
  });
});
