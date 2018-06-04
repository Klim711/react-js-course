import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const InfoPanel = function({film}) {
  return (
    <header className="row page-header">
      <div className="title-block">
        <h1 className="title">netflixroulette</h1>

        <Link to="/">
          <button className="btn">
            Search
          </button>
        </Link>
      </div>

      <div className="info-panel">
        <div className="info-panel__cover">
          <img src={film.poster_path}/>
        </div>

        <div className="info-panel__text">
          <h2>{film.title} <span>{film.vote_average}</span></h2>

          <div className="additional-info">
            <span className="year">{film.release_date}</span>
            <span className="time">{film.runtime} min</span>
          </div>

          <div className="description">
            {film.overview}
          </div>
        </div>
      </div>
    </header>
  );
};

export default InfoPanel;