// @flow
import React from 'react';
import EmptyList from './EmptyList';
import FilmBlock from './FilmBlock';

type FilmsContainerProps = {
  items: Array<any>;
}

const FilmsContainer = (props: FilmsContainerProps) => {
  let content;

  if (!props.items.length) {
    content = <EmptyList content="No Films Found"/>;
  } else {
    content = props.items.map(item => <FilmBlock key={item.id} instance={item}/>);
  }
  return <div className="items-container">{content}</div>;
};

export default FilmsContainer;
