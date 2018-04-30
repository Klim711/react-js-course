import React from 'react';

const FilmBlock = function(props) {
  return (
    <article>
        <div className="film-image">
          <img src={props.instance.coverUrl}/>
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
  )
}

export default FilmBlock;