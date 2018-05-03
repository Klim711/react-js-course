import React, {PureComponent} from 'react';
import Footer from '../Footer/Footer';
import InfoPanel from '../InfoPanel/InfoPanel';
import RelatedFilms from '../RelatedFilms/RelatedFilms';
import {getById, getRelated} from '../../items';

export default class FilmPage extends PureComponent {
  constructor() {
    super();

    this.state = {
      film: null,
      criteria: null,
      relatedFilms: null,
      criteriaValue: null,
    };
  }
  static getDerivedStateFromProps (props) {
    let id = props.match.params.id;
    let film = getById(id);
    let criteria = 'genre';
    let criteriaValue = film[criteria];
    let relatedFilms = getRelated(criteria, film);

    return {
      film,
      criteria,
      relatedFilms,
      criteriaValue,
    };
  }
  render() {
    return (
      <div className="container">
        <InfoPanel film={this.state.film}/>
        <RelatedFilms criteria={this.state.criteria}
                      criteriaValue={this.state.criteriaValue}
                      items={this.state.relatedFilms}/>
        <Footer content="FOOTER"/>
      </div>
    );
  }
}