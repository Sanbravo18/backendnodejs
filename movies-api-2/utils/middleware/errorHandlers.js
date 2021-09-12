const { config } = require('../../config');

function whitErrorStack(error, stack){
    if(config.dev){
        return{error,stack}
    }
    return error;
}

function logErrors(err, req, res, next) {
    console.log(err);
    next(err);
}

function errorHandler(err, req, res, next){ //eslint-disable-line
    res.status(err.status || 500);
    res.json(whitErrorStack(err.message, err.stack));
}

module.exports = {
    logErrors,
    errorHandler
}