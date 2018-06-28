import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { isArray } from 'util';

import { fetchMovie } from '../actions/movie';

import Footer from './Footer';
import InfoPanel from './InfoPanel';
import RelatedFilms from './RelatedFilms';

class FilmPage extends PureComponent {
  static getDerivedStateFromProps(props) {
    const { id } = props.match.params;
    const currentMovie = props.movie;

    if (!currentMovie || (String(currentMovie.id) !== id)) {
      props.getMovie(id);
    }

    return null;
  }

  render() {
    const { relatedMovies } = this.props;
    const film = this.props.movie;
    const { criteria } = this.props;

    const infoPanel = film ? <InfoPanel film={film}/> : null;

    let relatedFilms;
    if (film) {
      let criteriaValue = film[criteria];
      if (isArray(criteriaValue)) {
        [criteriaValue] = criteriaValue;
      }
      relatedFilms = <RelatedFilms criteria={criteria}
                      criteriaValue={criteriaValue}
                      items={relatedMovies}/>;
    }

    return (
      <div className="container">
        {infoPanel}
        {relatedFilms}
        <Footer/>
      </div>
    );
  }
}

function mapStateToProps({ movie }) {
  return {
    movie: movie.item,
    relatedMovies: movie.relatedMovies.items,
    criteria: movie.relatedMovies.criteria,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovie: (id) => {
      dispatch(fetchMovie(id));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
