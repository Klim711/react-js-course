import React from 'react';
import EmptyList from './EmptyList';
import FilmBlock from './FilmBlock';

const FilmsContainer = function(props) {
    let content;
  
    if (!props.items.length) {
      content = <EmptyList content="No Films Found"/>;
    } else {
      content = props.items.map((item) => {
        return<FilmBlock key={item.id} instance={item}/>
      });
    }
    return <div className="items-container">{content}</div>;
  };
  
  export default FilmsContainer;