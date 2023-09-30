import hapi from '@hapi/hapi';
import { infoLog } from './utils/logger.js';
import routeRegister from './controller.js';

/**
    Loader Backend API
    @return {Promise<void>} Tidak mengembalikan apapun
* */
async function serverLoader() {
  const app = hapi.server({
    host: process.env.HOST ?? '0.0.0.0',
    port: process.env.PORT ?? 9000,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  routeRegister(app);

  await app.start();

  infoLog(`Server berjalan pada \x1b[33m${app.info.uri}\x1b[0m`);
}

serverLoader();
