/**
  Menangani Route untuk home
 */
async function homeHandler() {
  return {
    status: 'OK',
    message: 'Server is running',
  };
}

export default {
  path: '/',
  method: 'GET',
  handler: homeHandler,
};
