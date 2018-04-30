import React from 'react';
import FilmsContainer from '../FilmsContainer/FilmsContainer';
import './Main.scss';

const Main = function(props) {
  return (
    <main className="row films">
      
      <FilmsContainer items={props.items}/>
    </main>
  );
};

export default Main;
