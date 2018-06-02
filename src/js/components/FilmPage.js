import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import Footer from './Footer';
import InfoPanel from './InfoPanel';
import RelatedFilms from './RelatedFilms';

class FilmPage extends PureComponent {
  static getDerivedStateFromProps (props) {
    let id = props.match.params.id;
    props.getMovie(id);
    props.getRelatedMovies();

    return null;
  }
  render() {
    const relatedMovies = this.props.relatedMovies;
    const film = this.props.movie;

    let infoPanel = film ? <InfoPanel film={film}/> : null;
    let relatedFilms = (relatedMovies && film) ? (
      <RelatedFilms criteria={relatedMovies.criteria}
                    criteriaValue={film[relatedMovies.criteria]}
                    items={relatedMovies.items}/>
    ) : null;

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
    relatedMovies: movie.relatedMovies,
  };
}

function mapDispatchToProps (dispatch){
  return {
    getMovie: (id) => {
      dispatch({
        type: 'GET_MOVIE',
        id: id,
      });
    },
    getRelatedMovies: (id) => {
      dispatch({
        type: 'GET_RELATED_MOVIES',
      });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);