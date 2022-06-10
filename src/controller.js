const home = require('./routes/home').default;

/**
  Mendaftarkan semua routing yang ada
  @param {hapi.Server} app
  @return {void}
* */
async function routeRegister(app) {
  app.route(home);
}

exports.routeRegister = routeRegister;
