const addBookHandler = require('./add').default;
const getBookHandler = require('./get').default;

/**
  Mendaftarkan semua routing pada books handler
  @param {hapi.Server} app
  @return {void}
* */
async function routeRegister(app) {
  app.route(addBookHandler);
  app.route(getBookHandler);
}

exports.default = routeRegister;
