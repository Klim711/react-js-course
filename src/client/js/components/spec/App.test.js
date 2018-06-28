import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';

import App from '../App';

configure({ adapter: new Adapter() });

describe('App component', () => {
  let wrapper;

  it('renders DUMB component', () => {
    wrapper = shallow(
      <BrowserRouter>
        <App/>
      </BrowserRouter>,
    );

    expect(wrapper.length).toEqual(1);
  });
});
