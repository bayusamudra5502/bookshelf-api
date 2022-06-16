const getBookshelf = require('../../models/getBookshelf').default;

/**
  Menangani Validasi dari request
  @param {hapi.Request} req Objek Request Hapi
  @param {hapi.ResponseToolkit} res Objek Result Hapi
*/

function bookIdValidator(req, res) {
  const { bookId } = req.params;
  const bookshelf = getBookshelf();

  if (!bookId || (bookId && !bookshelf.isIdExist(bookId))) {
    return res.response({
      status: 'fail',
      message: 'Buku tidak ditemukan',
    }).statusCode(404);
  }

  return null;
}

exports.bookIdValidator = bookIdValidator;

/**
 Melakukan validasi pada nama buku
  @param {hapi.Request} req Objek Request Hapi
  @param {hapi.ResponseToolkit} res Objek Result Hapi
 */
function bookNameValidator(req, res) {
  const body = req.payload;

  if (!body.name) {
    return res.response(
      {
        status: 'fail',
        message: 'Gagal menambahkan buku. Mohon isi nama buku',
      },
    ).code(400);
  }

  return null;
}

exports.bookNameValidator = bookNameValidator;

/**
  Melakukan validasi jumlah halaman yang dibaca
  @param {hapi.Request} req Objek Request Hapi
  @param {hapi.ResponseToolkit} res Objek Result Hapi
*/
function numReadValidator(req, res) {
  const body = req.payload;

  if (body.readPage > body.pageCount) {
    return res.response(
      {
        status: 'fail',
        message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
      },
    ).code(400);
  }

  return null;
}

exports.numReadValidator = numReadValidator;
