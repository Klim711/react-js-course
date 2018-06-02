import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import Footer from './Footer';
import InfoPanel from './InfoPanel';
import RelatedFilms from './RelatedFilms';
import {getMovie, getRelated} from '../items';
import { isAbsolute } from 'path';
import { isArray } from 'util';

class FilmPage extends PureComponent {
  static async getDerivedStateFromProps (props) {
    let id = props.match.params.id;
    const currentMovie = props.movie;

    if (!currentMovie || (String(currentMovie.id) !== id)) {
      const movie = await props.getMovie(id);

      const criteria = props.relatedMovies.criteria;
      props.getRelatedMovies(criteria, movie);
    }

    return null;
  }
  render() {
    const relatedMovies = this.props.relatedMovies;
    const film = this.props.movie;
    const criteria = this.props.criteria;

    let infoPanel = film ? <InfoPanel film={film}/> : null;

    let relatedFilms;
    if (film) {
      let criteriaValue = film[criteria];
      if (isArray(criteriaValue)) {
        criteriaValue = criteriaValue[0];
      }
      relatedFilms = 
        <RelatedFilms criteria={criteria}
                      criteriaValue={criteriaValue}
                      items={relatedMovies}/>;
    }


    return (
      <div className="container">
        {infoPanel}
        {relatedFilms}
        <Footer content="FOOTER"/>
      </div>
    );
  }
}

function mapStateToProps ({movie}){
  return {
    movie: movie.item,
    relatedMovies: movie.relatedMovies.items,
    criteria: movie.relatedMovies.criteria,
  };
}

function mapDispatchToProps (dispatch){
  return {
    getMovie: async (id) => {
      const data = await getMovie(id);
      
      dispatch({
        type: 'SET_MOVIE',
        item: data,
      });
      return data;
    },
    getRelatedMovies: async (criteria, relatesTo) => {
      const data = await getRelated(criteria, relatesTo);

      dispatch({
        type: 'SET_RELATED_MOVIES',
        items: data,
      });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);