const { bookIdValidator } = require('./validation');
const getBookshelf = require('../../models/getBookshelf');

/**
  Menangani Validasi dari request
  @param {hapi.Request} req Objek Request Hapi
  @param {hapi.ResponseToolkit} res Objek Result Hapi
*/
function detailValidator(req, res) {
  return bookIdValidator(req, res);
}

/**
  Menangani Route untuk menghapus buku
  @param {hapi.Request} req Objek Request Hapi
  @param {hapi.ResponseToolkit} res Objek Result Hapi
*/
async function deleteBookHandler(req, res) {
  try {
    const validation = detailValidator(req, res);

    if (validation) {
      return validation;
    }

    const { bookId } = req.params;

    const bookshelf = getBookshelf();
    bookshelf.deleteBook(bookId);

    return res.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    }).code(201);
  } catch (e) {
    return res.response(
      {
        status: 'error',
        message: 'Buku gagal dihapus',
      },
    ).code(500);
  }
}

exports.default = {
  path: '/books/{bookId}',
  method: 'DELETE',
  handler: deleteBookHandler,
};
