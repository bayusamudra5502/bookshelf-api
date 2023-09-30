import { errorLog, infoLog } from '../../utils/logger.js';
import { bookIdValidator } from './validation.js';
import getBookshelf from '../../models/getBookshelf.js';

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

    infoLog(`Get book detail id ${bookId}`);

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

export default {
  path: '/books/{bookId}',
  method: 'GET',
  handler: getBookDetailHandler,
};
