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
    const filters = ['title', 'genre'].map((filter) => {
      let className = (filter === this.props.value) ? 'active' : '';

      return (
        <button className={className} value={filter} onClick={this.filterBy}>
          {filter}
        </button>
      );
    });

    return (
        <div className="search__filter">
          Search By
          {filters}
        </div>
    );
  }
}