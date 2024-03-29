import { errorLog, infoLog } from '../../utils/logger.js';
import { bookIdValidator, bookNameValidator, numReadValidator } from './validation.js';
import getBookshelf from '../../models/getBookshelf.js';

/**
  Menangani Validasi dari request
  @param {hapi.Request} req Objek Request Hapi
  @param {hapi.ResponseToolkit} res Objek Result Hapi
*/
function detailValidator(req, res) {
  return bookIdValidator(req, res, 'Gagal memperbarui buku. Id tidak ditemukan')
    || bookNameValidator(req, res, 'Gagal memperbarui buku. Mohon isi nama buku')
    || numReadValidator(req, res, 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount');
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
    const body = req.payload;

    const bookshelf = getBookshelf();
    bookshelf.updateBook(bookId, body);

    const book = bookshelf.getBookById(bookId);

    infoLog(`Edit book with id ${bookId}`);

    return {
      status: 'success',
      message: 'Buku berhasil diperbarui',
      data: {
        book: book.getObject(),
      },
    };
  } catch (e) {
    errorLog(e.message);
    return res.response(
      {
        status: 'error',
        message: 'Buku gagal diperbarui',
      },
    ).code(500);
  }
}

export default {
  path: '/books/{bookId}',
  method: 'PUT',
  handler: editBookHandler,
};
