import React from 'react';
import EmptyList from '../EmptyList/EmptyList';
import FilmBlock from '../FilmBlock/FilmBlock';

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