const home = require('./routes/home').default;
const notFound = require('./routes/notfound').default;

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
