/**
  Menangani Route untuk alamat yang tidak ada
  @param {hapi.Request} req Objek Request Hapi
  @param {hapi.ResponseToolkit} res Objek Result Hapi
*/
async function notFoundHandler(req, res) {
  return res.response({
    status: 'fail',
    message: 'Request not found',
  }).code(404);
}

export default {
  path: '/{any*}',
  method: '*',
  handler: notFoundHandler,
};
