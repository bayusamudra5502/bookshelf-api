const { errorLog } = require('../../util/logger');
const { bookIdValidator } = require('./validation');

const getBookshelf = require('../../models/getBookshelf').default;

/**
  Menangani Validasi dari request
  @param {hapi.Request} req Objek Request Hapi
  @param {hapi.ResponseToolkit} res Objek Result Hapi
*/
function detailValidator(req, res) {
  return bookIdValidator(req, res);
}

/**
  Menangani Route untuk alamat yang tidak ada
  @param {hapi.Request} req Objek Request Hapi
  @param {hapi.ResponseToolkit} res Objek Result Hapi
*/
async function getBookDetailHandler(req, res) {
  try {
    const validation = detailValidator(req, res);

    if (validation) {
      return validation;
    }

    const { bookId } = req.params;

    const bookshelf = getBookshelf();
    const book = bookshelf.getBookById(bookId);

    return res.response({
      status: 'success',
      message: 'Buku berhasil diambil',
      data: {
        book: book.getObject(),
      },
    }).code(200);
  } catch (e) {
    errorLog(e.message);
    return res.response(
      {
        status: 'error',
        message: 'Buku gagal diambil',
      },
    ).code(500);
  }
}

exports.default = {
  path: '/books/{bookId}',
  method: 'GET',
  handler: getBookDetailHandler,
};
