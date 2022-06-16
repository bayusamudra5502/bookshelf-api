const getBookshelf = require('../../models/getBookshelf').default;

/**
  Menangani Route untuk alamat yang tidak ada
  @param {hapi.Request} req Objek Request Hapi
*/
async function getAllBookHandler(req) {
  const bookshelf = getBookshelf();

  const { name, reading, finished } = req.query;
  const result = bookshelf.filter({ name, reading, finished }).map((book) => book.getObject());

  return {
    status: 'success',
    data: {
      books: result,
    },
  };
}

exports.default = {
  path: '/books',
  method: 'GET',
  handler: getAllBookHandler,
};
