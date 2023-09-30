export default class Bookshelf {
  constructor() {
    /**
      Kumpulan data buku
      @type {Map<string, Book>}
     */
    this.bookData = new Map();
  }

  /**
   * Mengembalikan nilai true bila id buku sudah ada
   * @param {string} id
   * @returns {boolean}
   */
  isIdExist(id) {
    return this.bookData.has(id);
  }

  /**
   * Menambahkan buku pada daftar
   * @param {Book} bookData Objek Buku
   * @throws {Error} Jika buku sudah ada
   * @returns {Bookshelf} Objek Bookshelf itu sendiri
   */
  addBook(bookData) {
    const id = bookData.getId();

    if (this.isIdExist(id)) {
      throw new Error('Data buku sudah ada');
    }

    this.bookData.set(id, bookData);
    return this;
  }

  /**
   * Menghapus data buku
   * @param {string} id
   * @throws {Error} jika id buku tidak ditemukan
   * @returns {Bookshelf} Objek Bookshelf itu sendiri
   */
  deleteBook(id) {
    if (!this.isIdExist(id)) {
      throw new Error('Id buku tidak ditemukan');
    }

    this.bookData.delete(id);
    return this;
  }

  /**
   * Update data buku
   * @param {string} id
   * @throws {Error} jika id buku tidak ditemukan
   * @returns {Bookshelf} Objek Bookshelf itu sendiri
   */
  updateBook(id, bookData) {
    const book = this.getBookById(id);
    book.update(bookData);

    return this;
  }

  /**
   * Mendapatkan objek buku berdasarkan id
   * @param {string} id
   * @throws {Error} jika id buku tidak ditemukan
   * @returns {Book} Objek Buku yang dicari
   */
  getBookById(id) {
    if (!this.isIdExist(id)) {
      throw new Error('Id buku tidak ditemukan');
    }

    const book = this.bookData.get(id);
    return book;
  }

  /**
   * Mendapatkan semua buku
   * @returns {Array<Book>} Array dari buku
   */
  getAllBook() {
    return [...this.bookData.values()];
  }

  /**
   * Mencari buku berdasarkan filter yang diberikan
   * @param {object} name Nama buku
   */
  filter({ name, reading, finished } = { name: '', reading: null, finished: null }) {
    return this.getAllBook().filter((el) => {
      if (name && !el.name
        .toLowerCase()
        .includes(name.toLowerCase())) {
        return false;
      }

      if (reading && el.reading !== (reading === '1')) {
        return false;
      }

      if (finished && el.isFinished() !== (finished === '1')) {
        return false;
      }

      return true;
    });
  }
}
