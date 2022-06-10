/**
    Menangani Route untuk home
    @param {hapi.Request} req Objek Request Hapi
    @param {hapi.ResponseToolkit} res Objek Result Hapi
 */
async function homeRoute(req, res) {
  return res.response({
    status: 'OK',
    message: 'Server is running',
  });
}

exports.default = {
  path: '/',
  method: 'GET',
  handler: homeRoute,
};
