import React from 'react';
import FilmsContainer from './FilmsContainer';
import FilmsHeader from './FilmsHeader';

const Main = function(props) {
  let header;

  if (!props.items.length) {
    header = '';
  } else {
    header = 
      <div className="row">
        <FilmsHeader sortBy={props.sortBy}
                    sortings={props.sortings}
                    count={props.items.length}
                    setSorting={props.setSorting}/>
      </div>;
  }

  return (
    <main className="films">
      {header}
      <div className="row">
        <FilmsContainer items={props.items}/>
      </div>
    </main>
  );
};

export default Main;
