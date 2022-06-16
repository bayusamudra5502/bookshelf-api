const home = require('./handlers/home').default;
const notFound = require('./handlers/404').default;

/**
  Mendaftarkan semua routing yang ada
  @param {hapi.Server} app
  @return {void}
* */
async function routeRegister(app) {
  app.route(home);
  app.route(notFound);
}

exports.routeRegister = routeRegister;
