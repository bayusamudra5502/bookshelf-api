const hapi = require('@hapi/hapi');
const { routeRegister } = require('./controller');
const { infoLog } = require('./util/logger');

/**
    Loader Backend API
    @return {Promise<void>} Tidak mengembalikan apapun
* */
async function serverLoader() {
  const app = hapi.server({
    host: process.env.HOST ?? '0.0.0.0',
    port: process.env.PORT ?? 8080,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  routeRegister(app);

  await app.start();

  infoLog(`Server berjalan pada ${app.info.uri}`);
}

serverLoader();
