import express from "express";
import cors from "cors";

import React from 'react'
import { renderToString } from 'react-dom/server';
import App from '../shared/components/App';
import routes from '../shared/routes/routes';
import { StaticRouter } from "react-router-dom";
import { ServerStyleSheet } from 'styled-components'; 
import exphbs from 'express-handlebars';
import path from 'path';
import handleNonce from './middleware/nonce';
import cspRules from './middleware/csp';
import helmetCsp from 'helmet-csp';
import cookies from 'cookie-parser';

const app = express();

app.use(cookies());

app.set('views', path.join(process.cwd(), 'src', 'server'));
app.engine( '.hbs', exphbs({
  extname: '.hbs',
  defaultView: 'default',
  layoutsDir: '/src/server'
}));
app.set('view engine', '.hbs');
app.use(cors());

// We're going to serve up the public
// folder since that's where our
// client bundle.js file will end up.
app.use(express.static("webpack/public"));

app.use(handleNonce);
app.use(helmetCsp(cspRules));

app.get("*", (req, res, next) => {

  const sheet = new ServerStyleSheet();

  const markup = renderToString(
    sheet.collectStyles(
      <StaticRouter location={req.url} context={{}}>
        <App />
      </StaticRouter>
    )
  );

  const styles = sheet.getStyleTags();

  // testing sample data
  const data = JSON.stringify({ a: 1 });

  res.render('index', { data, styles, markup });
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
});