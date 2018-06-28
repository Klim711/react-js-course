import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from '../client/js/components/App';
import configureStore from '../client/js/configureStore';

function renderFullPage(html, preloadedState) {
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
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script type="text/javascript" src="js/main.js"></script>
        </body>
      </html>
  `;
};

function handleRender (req, res) {
  const context = {};
  
  const store = configureStore();

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

  const preloadedState = store.getState();

  return res.send(renderFullPage(html, preloadedState));
};

export default handleRender;