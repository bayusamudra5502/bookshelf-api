const home = require('./handlers/home').default;
const notFound = require('./handlers/404').default;
const bookRegister = require('./handlers/books').default;

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

exports.routeRegister = routeRegister;
