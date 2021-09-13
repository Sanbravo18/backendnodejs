const { application } = require('express');
const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

//
const {
  logErrors,
  wrapErrors,
  errorHandler,
} = require('./utils/middleware/errorHandlers.js');

const notFoundHandler = require('./utils/middleware/notFoundHandler.js')

//body parser
app.use(express.json());


// Cuando hagamos un request a nuestra aplicación, nos imprima un hello world

moviesApi(app);

//catch 404

app.use(notFoundHandler);

//Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
