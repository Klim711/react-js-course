import React, {Component} from 'react';
import Filter from '../Filter/Filter';

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
        <div>
          <div>FIND YOUR MOVIE</div>

          <input type="text" ref={(input) => this.input = input}></input>
          <Filter value={this.props.filter}
                  setSearchFilter={this.props.setSearchFilter}/>
          <button onClick={this.search}>Search</button>
        </div>
    );
  }
}