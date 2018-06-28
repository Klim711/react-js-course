import React from 'react';

const FilmsCriteria = props => (
  <div className="films-header">
    Films by {props.criteriaValue} {props.criteria}
  </div>
);

export default FilmsCriteria;
