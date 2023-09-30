import getBookshelf from '../../models/getBookshelf.js';

/**
  Menangani Validasi dari request
  @param {hapi.Request} req Objek Request Hapi
  @param {hapi.ResponseToolkit} res Objek Result Hapi
  @param {string} message Pesan Custom error (Opsional)
*/

export function bookIdValidator(req, res, message = 'Buku tidak ditemukan') {
  const { bookId } = req.params;
  const bookshelf = getBookshelf();

  if (!bookId || (bookId && !bookshelf.isIdExist(bookId))) {
    return res.response({
      status: 'fail',
      message,
    }).code(404);
  }

  return null;
}

/**
 Melakukan validasi pada nama buku
  @param {hapi.Request} req Objek Request Hapi
  @param {hapi.ResponseToolkit} res Objek Result Hapi
  @param {string} message Pesan Custom error (Opsional)
 */
export function bookNameValidator(req, res, message = 'Gagal menambahkan buku. Mohon isi nama buku') {
  const body = req.payload;

  if (!body?.name) {
    return res.response(
      {
        status: 'fail',
        message,
      },
    ).code(400);
  }

  return null;
}

/**
  Melakukan validasi jumlah halaman yang dibaca
  @param {hapi.Request} req Objek Request Hapi
  @param {hapi.ResponseToolkit} res Objek Result Hapi
  @param {string} message Pesan Custom error (Opsional)
*/
export function numReadValidator(req, res, message = 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount') {
  const body = req.payload;

  if (body?.readPage > body?.pageCount) {
    return res.response(
      {
        status: 'fail',
        message,
      },
    ).code(400);
  }

  return null;
}
