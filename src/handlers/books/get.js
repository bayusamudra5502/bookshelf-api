const { infoLog } = require('../../util/logger');

const getBookshelf = require('../../models/getBookshelf').default;

function getLog({
  name, reading, finished, length,
}) {
  if (!name && !reading && !finished) {
    infoLog(`Fetching all books (got ${length} books)`);
  } else {
    let message = 'Fetching books with query';

    if (name) { message += ` name='${name}'`; }
    if (reading) { message += ` reading=${reading === '1'}`; }
    if (finished) { message += ` finished=${finished === '1'}`; }

    infoLog(`${message} (got ${length} books)`);
  }
}

/**
  Menangani Route untuk alamat yang tidak ada
  @param {hapi.Request} req Objek Request Hapi
*/
async function getAllBookHandler(req) {
  const bookshelf = getBookshelf();

  const { name, reading, finished } = req.query;

  const result = bookshelf.filter({ name, reading, finished }).map((book) => {
    const { id, name: namaBuku, publisher } = book.getObject();
    return { id, name: namaBuku, publisher };
  });

  getLog({
    name, reading, finished, length: result.length,
  });

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
