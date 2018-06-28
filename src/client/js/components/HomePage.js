import React, {Component} from 'react';
import {connect} from 'react-redux';

import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import {fetchMovies} from '../actions/movies';

class HomePage extends Component {
  constructor(props) {
    super();

    props.getMovies();
  }

  render() {
    return (
      <div className="container">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

function mapDispatchToProps (dispatch){
  return {
    getMovies: () => {
      dispatch(fetchMovies());
    },
  };
}

export default connect(null, mapDispatchToProps)(HomePage);
