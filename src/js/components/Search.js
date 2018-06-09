import React, {Component} from 'react';
import {connect} from 'react-redux';

import Filter from './Filter';
import {setSearchValue, setSearchBy} from '../actions/movies';

class Search extends Component {
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
                    value={this.props.active}
                    items={this.props.values}
                    setActive={this.props.setSearchFilter}/>
            <button className="btn" onClick={this.search}>Search</button>
          </div>
        </div>
    );
  }
}

function mapStateToProps ({movies}){
  const {searchBy} = movies;

  return {
    active: searchBy.active,
    values: searchBy.values,
  };
}

function mapDispatchToProps (dispatch, ownProps){
  return {
    setSearchValue: (value) => {
      dispatch(setSearchValue(value));
      
      dispatch({
        type: 'MOVIES_FETCH',
      });
    },
    setSearchFilter: (value) => {
      dispatch(setSearchBy(value));

      dispatch({
        type: 'MOVIES_FETCH',
      });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);