import React, {Component} from 'react';
import Search from '../Search/Search';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <header className="row page-header">
        <h1 className="title">netflixroulette</h1>

        <Search filter={this.props.filter}
                filters={this.props.filters}
                setSearchFilter={this.props.setSearchFilter}
                setSearchValue={this.props.setSearchValue}/>
      </header>
    );
  }
}