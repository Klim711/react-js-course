// @flow
import React from 'react';

type FilmsCriteriaProps = {
  criteriaValue: string;
  criteria: string;
}

const FilmsCriteria = (props: FilmsCriteriaProps) => (
  <div className="films-header">
    Films by {props.criteriaValue} {props.criteria}
  </div>
);

export default FilmsCriteria;
