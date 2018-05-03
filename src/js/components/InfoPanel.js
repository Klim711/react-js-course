import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const InfoPanel = function(props) {
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
          <img src={props.film.coverUrl}/>
        </div>

        <div className="info-panel__text">
          <h2>{props.film.title} <span>{props.film.rating}</span></h2>

          <div className="additional-info">
            <span className="year">{props.film.year}</span>
            <span className="time">{props.film.time} min</span>
          </div>

          <div className="description">
            {props.film.description}
          </div>
        </div>
      </div>
    </header>
  );
};

export default InfoPanel;