const { default: Book } = require('../../models/Book');
const { errorLog } = require('../../util/logger');
const { randomId } = require('../../util/random');
const { bookNameValidator, numReadValidator } = require('./validation');
const getBookshelf = require('../../models/getBookshelf').default;

/**
  Menangani Validasi dari request
  @param {hapi.Request} req Objek Request Hapi
  @param {hapi.ResponseToolkit} res Objek Result Hapi
*/
function insertValidate(req, res) {
  return bookNameValidator(req, res) || numReadValidator(req, res);
}

/**
  Menangani Route untuk alamat yang tidak ada
  @param {hapi.Request} req Objek Request Hapi
  @param {hapi.ResponseToolkit} res Objek Result Hapi
*/
async function addBook(req, res) {
  try {
    const validation = insertValidate(req, res);

    if (validation) {
      return validation;
    }

    const body = req.payload;

    const bookshelf = getBookshelf();
    const book = new Book({ ...body, id: await randomId() });

    bookshelf.addBook(book);

    return res.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: book.getId(),
      },
    }).code(201);
  } catch (e) {
    errorLog(e.message);
    return res.response(
      {
        status: 'error',
        message: 'Buku gagal ditambahkan',
      },
    ).code(500);
  }
}

exports.default = {
  path: '/books',
  method: 'POST',
  handler: addBook,
};
