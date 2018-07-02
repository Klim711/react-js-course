import React from 'react';
import { renderToString } from 'react-dom/server';
import { JssProvider, SheetsRegistry } from 'react-jss';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import saga from '../client/js/sagas/sagas';
import App from '../client/js/components/App';
import configureStore from '../client/js/configureStore';

function renderFullPage(html, preloadedState, sheets) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          <link rel="stylesheet" href="/styles.css">
          
          <style type="text/css">
            ${sheets.toString()}
          </style>
        </head>
        <body>
          <div id="container">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script type="text/javascript" src="/js/main.js"></script>
        </body>
      </html>
  `;
}

function handleRender(req, res) {
  const context = {};

  const store = configureStore();

  const sheets = new SheetsRegistry();

  const app = (
    <JssProvider registry={sheets}>
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App/>
        </StaticRouter>
      </Provider>
    </JssProvider>
  );

  store.runSaga(saga).done.then(() => {
    const html = renderToString(app);

    if (context.url) {
      // Somewhere a `<Redirect>` was rendered
      return res.redirect(context.url);
    }

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    return res.send(renderFullPage(html, preloadedState, sheets));
  });

  // Do first render, starts initial actions.
  renderToString(app);

  // When the first render is finished, send the END action to redux-saga.
  store.close();
}

export default handleRender;
