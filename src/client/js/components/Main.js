import React from 'react';
import { connect } from 'react-redux';

import FilmsContainer from './FilmsContainer';
import FilmsHeader from './FilmsHeader';

const Main = (props) => {
  let header;

  if (!props.items.length) {
    header = '';
  } else {
    header = <div className="row">
        <FilmsHeader count={props.items.length}/>
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

function mapStateToProps(state) {
  return {
    items: state.movies.items,
  };
}
export default connect(mapStateToProps)(Main);
