import React, { Component } from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

import Filter from './Filter';
import { setSearchValue, setSearchBy, fetchMovies } from '../actions/movies';

import styles from './styles/Search';

class Search extends Component {
  constructor(props) {
    super();

    props.getMovies();

    this.search = this.search.bind(this);
  }

  search() {
    this.props.setSearchValue(this.input.value);
  }

  render() {
    const { classes } = this.props;

    return (
        <div className={classes.search}>
          <div className='title'>FIND YOUR MOVIE</div>

          <input className={classes.input} type="text" ref={(input) => { this.input = input; }}></input>
          <div className={classes['search-buttons']}>
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

function mapStateToProps({ movies }) {
  const { searchBy } = movies;

  return {
    active: searchBy.active,
    values: searchBy.values,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSearchValue: (value) => {
      dispatch(setSearchValue(value));

      dispatch(fetchMovies());
    },
    setSearchFilter: (value) => {
      dispatch(setSearchBy(value));

      dispatch(fetchMovies());
    },
    getMovies: () => {
      dispatch(fetchMovies());
    },
  };
}

export default injectSheet(styles)(connect(mapStateToProps, mapDispatchToProps)(Search));
