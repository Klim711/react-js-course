import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from '../client/js/components/App';
import {store} from '../client/js/configureStore';

function renderFullPage(html) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          <link rel="stylesheet" href="styles.css">
        </head>
        <body>
          <div id="container">${html}</div>
          <script type="text/javascript" src="js/main.js"></script>
        </body>
      </html>
  `;
};

function handleRender (req, res) {
  const context = {};

  const app = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context} >
        <App/>
      </StaticRouter>
    </Provider>
  );

  const html = renderToString(app);

  if (context.url) {
    return res.redirect(context.url);
  }

  return res.send(renderFullPage(html));
};

export default handleRender;