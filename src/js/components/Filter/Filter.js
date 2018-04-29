import React, {Component} from 'react';

export default class Filter extends Component {
  constructor() {
    super();

    this.filterBy = this.filterBy.bind(this);
  }
  filterBy(event) {
    this.props.setSearchFilter(event.target.value);
  }
  render () {
    return (
        <div className="search__filter">
          Search By
          <button value="title" onClick={this.filterBy}>Title</button>
          <button value="genre" onClick={this.filterBy}>Genre</button>
        </div>
    );
  }
}