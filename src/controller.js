import home from './handlers/home.js';
import notFound from './handlers/404.js';
import bookRegister from './handlers/books/index.js';

/**
  Mendaftarkan semua routing yang ada
  @param {hapi.Server} app
  @return {void}
* */
async function routeRegister(app) {
  app.route(home);
  bookRegister(app);
  app.route(notFound);
}

export default routeRegister;
