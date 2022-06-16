const { default: Book } = require('../../models/Book');
const getBookshelf = require('../../models/getBookshelf').default;

/**
  Menangani Validasi dari request
  @param {hapi.Request} req Objek Request Hapi
  @param {hapi.ResponseToolkit} res Objek Result Hapi
*/
function validate(req, res) {
  const body = req.payload;

  if (!body.name) {
    return res.response(
      {
        status: 'fail',
        message: 'Gagal menambahkan buku. Mohon isi nama buku',
      },
    ).code(400);
  }

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

/**
  Menangani Route untuk alamat yang tidak ada
  @param {hapi.Request} req Objek Request Hapi
  @param {hapi.ResponseToolkit} res Objek Result Hapi
*/
async function addBook(req, res) {
  try {
    const validation = validate(req, res);

    if (validation) {
      return validation;
    }

    const body = req.payload;

    const bookshelf = getBookshelf();
    const book = new Book(body);

    bookshelf.addBook(book);

    return res.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: book.getId(),
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
  path: '/books',
  method: 'POST',
  handler: addBook,
};
