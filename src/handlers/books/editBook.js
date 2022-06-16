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
async function editBookHandler(req, res) {
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
      message: 'Buku berhasil ditambahkan',
      data: {
        book: book.getObject(),
      },
    }).code(201);
  } catch (e) {
    return res.response(
      {
        status: 'error',
        message: 'Buku gagal ditambahkan',
      },
    ).code(500);
  }
}

exports.default = {
  path: '/books/{bookId}',
  method: 'PUT',
  handler: editBookHandler,
};
