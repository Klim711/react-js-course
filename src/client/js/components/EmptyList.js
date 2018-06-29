// @flow
import React from 'react';

type EmptyListProps = {
  content: string;
};

const EmptyList = (props: EmptyListProps) => <div className="empty-list">{props.content}</div>;

export default EmptyList;
