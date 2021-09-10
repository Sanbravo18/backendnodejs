const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

//body parser
app.use(express.json());

// Cuando hagamos un request a nuestra aplicación, nos imprima un hello world

moviesApi(app);

app.listen(config.port, function () {
    console.log(`Listening http://localhost:${config.port}`);
  })
