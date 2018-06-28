import React from 'react';
import { Link } from 'react-router-dom';

const FilmBlock = props => (
  <Link to={`/films/${props.instance.id}`}>
  <article className="film-block">
      <div className="film-image">
        <img src={props.instance.poster_path}/>
      </div>
      <div className="film-text">
        <div className="film-title">
          {props.instance.title}
        </div>
        <div className="film-genre">
          {props.instance.genre}
        </div>
        <div className="film-year">
          {props.instance.year}
        </div>
      </div>
  </article>
  </Link>
);

export default FilmBlock;
