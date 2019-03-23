# React starter-kit
This is a sample starter kit for React. It includes the support for following:
1. React
2. react-router
3. styled-components
4. isomorphic render
5. code splitting
6. image imports
7. handlebars

# setup

Install dependencies:
`npm install`

# structure

1. we have 2 `webpack` config files, for server (`server.config.js`) and one for client (`client.config.js`)
2. run script `npm run client` - this builds and watches your client files
3. run script `npm run server` - this builds server code and puts into `/webpack/server.js` and then `nodemon` executes this
   output transplied server.
4. server runs on port 3000
