const addBookHandler = require('./add').default;
const getBookHandler = require('./get').default;
const deleteBookHandler = require('./delete').default;
const editBookHandler = require('./editBook').default;
const getBookDetailHandler = require('./getDetail').default;

/**
  Mendaftarkan semua routing pada books handler
  @param {hapi.Server} app
  @return {void}
* */
async function routeRegister(app) {
  app.route(addBookHandler);
  app.route(getBookHandler);
  app.route(deleteBookHandler);
  app.route(editBookHandler);
  app.route(getBookDetailHandler);
}

exports.default = routeRegister;
