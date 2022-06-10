/**
  Menangani Route untuk home
 */
async function homeHandler() {
  return {
    status: 'OK',
    message: 'Server is running',
  };
}

exports.default = {
  path: '/',
  method: 'GET',
  handler: homeHandler,
};
