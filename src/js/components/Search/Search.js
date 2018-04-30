import React, {Component} from 'react';
import Filter from '../Filter/Filter';
import './Search.scss';

export default class Search extends Component {
  constructor() {
    super();

    this.search = this.search.bind(this);
  }
  search(event) {
    this.props.setSearchValue(this.input.value);
  }
  render () {
    return (
        <div className="search">
          <div className="search__title">FIND YOUR MOVIE</div>

          <input type="text" ref={(input) => this.input = input}></input>
          <div className="search-buttons">
            <Filter content="Search By"
                    value={this.props.filter}
                    items={this.props.filters}
                    setActive={this.props.setSearchFilter}/>
            <button onClick={this.search}>Search</button>
          </div>
        </div>
    );
  }
}