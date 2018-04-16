import React from 'react';
import ReactDOM from "react-dom";

const Title = React.createElement(
  'h1',
  null,
  'Hello World!'
);

ReactDOM.render(Title, document.getElementById("header"));
