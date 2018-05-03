import React, {Component} from 'react';
import FilmsContainer from './FilmsContainer';
import FilmsCriteria from './FilmsCriteria';

const RelatedFilms = function(props) {
  return (
    <main className="films">
      <div className="row">
        <FilmsCriteria criteria={props.criteria}
                       criteriaValue={props.criteriaValue}/>
      </div>
      <div className="row">
        <FilmsContainer items={props.items}/>
      </div>
    </main>
  );
}

export default RelatedFilms;