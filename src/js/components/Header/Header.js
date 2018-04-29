import React, {Component} from 'react';
import Search from '../Search/Search';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <header className="page-header">
        <h1>netflixroulette</h1>

        <Search filter={this.props.filter}
                setSearchFilter={this.props.setSearchFilter}
                setSearchValue={this.props.setSearchValue}/>
      </header>
    );
  }
}