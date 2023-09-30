import addBookHandler from './add.js';
import getBookHandler from './get.js';
import deleteBookHandler from './delete.js';
import editBookHandler from './editBook.js';
import getBookDetailHandler from './getDetail.js';

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

export default routeRegister;
