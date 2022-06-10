const { default: Bookshelf } = require('./Bookshelf');

let bookshelf = null;

/**
 * Mendapatkan objek bookshelf yang telah dibuat sebelumnya,
 * atau buat baru jika belum ada
 * @returns {Bookshelf} Objek bookshelf
 */
exports.default = function getBookshelf() {
  if (!bookshelf) {
    bookshelf = new Bookshelf();
  }

  return bookshelf;
};
