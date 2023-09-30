import Book from '../../models/Book.js';
import { errorLog, infoLog } from '../../utils/logger.js';
import randomId from '../../utils/random.js';
import { bookNameValidator, numReadValidator } from './validation.js';
import getBookshelf from '../../models/getBookshelf.js';

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

    infoLog(`Adding book with id ${book.getId()}`);

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

export default {
  path: '/books',
  method: 'POST',
  handler: addBook,
};
