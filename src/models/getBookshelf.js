import Bookshelf from './Bookshelf.js';

let bookshelf = null;

/**
 * Mendapatkan objek bookshelf yang telah dibuat sebelumnya,
 * atau buat baru jika belum ada
 * @returns {Bookshelf} Objek bookshelf
 */
export default function getBookshelf() {
  if (!bookshelf) {
    bookshelf = new Bookshelf();
  }

  return bookshelf;
}
