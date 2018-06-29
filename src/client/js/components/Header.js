import React, {Component} from 'react';
import Search from './Search';

export default class Header extends Component {
  render() {
    return (
      <header className="row page-header">
        <h1 className="title">netflixroulette</h1>

        <Search/>
      </header>
    );
  }
}