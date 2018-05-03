import React, {Component} from 'react';

const FilmsCriteria = function(props) {
  return (
    <div className="films-header">
      Films by {props.criteriaValue} {props.criteria}
    </div>
  );
}

export default FilmsCriteria;