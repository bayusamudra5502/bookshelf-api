import { bookIdValidator } from './validation.js';
import getBookshelf from '../../models/getBookshelf.js';
import { errorLog, infoLog } from '../../utils/logger.js';

/**
  Menangani Validasi dari request
  @param {hapi.Request} req Objek Request Hapi
  @param {hapi.ResponseToolkit} res Objek Result Hapi
*/
function detailValidator(req, res) {
  return bookIdValidator(req, res, 'Buku gagal dihapus. Id tidak ditemukan');
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

    infoLog(`Delete book with id ${bookId}`);

    return {
      status: 'success',
      message: 'Buku berhasil dihapus',
    };
  } catch (e) {
    errorLog(e.message);
    return res.response(
      {
        status: 'error',
        message: 'Buku gagal dihapus',
      },
    ).code(500);
  }
}

export default {
  path: '/books/{bookId}',
  method: 'DELETE',
  handler: deleteBookHandler,
};
