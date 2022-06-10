const hapi = require('@hapi/hapi');
const process = require('node:process');
const { routeRegister } = require('./controller');

/**
    Loader Backend API
    @return {Promise<void>} Tidak mengembalikan apapun
* */
async function serverLoader() {
  const app = hapi.server({
    host: '0.0.0.0',
    port: process.env.PORT ?? 8080,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  routeRegister(app);

  await app.start();

  process.stdout.write(`Server berjalan pada ${app.info.uri}\n`);
}

serverLoader();
