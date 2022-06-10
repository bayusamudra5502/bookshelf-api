class Bookshelf {
  constructor() {
    /**
      Kumpulan data buku
      @type {Array<Book>}
     */
    this.bookData = {};
  }

  /**
   * Mengembalikan nilai true bila id buku sudah ada
   * @param {string} id
   * @returns {boolean}
   */
  isIdExist(id) {
    if (this.bookData.length === 0) { return false; }

    return this.bookData.reduce((prev, it) => id === it.getId() || prev, true);
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
      throw new Error({
        code: 1,
        message: 'Data buku sudah ada',
      });
    }

    this.bookData.push(bookData);
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
      throw new Error({
        code: 2,
        message: 'Id buku tidak ditemukan',
      });
    }

    this.bookData = this.bookData.filter((el) => el.getId() !== id);
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
    book.updateBook(bookData);

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
      throw new Error({
        code: 2,
        message: 'Id buku tidak ditemukan',
      });
    }

    const book = this.bookData.filter((el) => el.getId() === id)[0];
    return book;
  }

  /**
   * Mendapatkan semua buku
   * @returns {Array<Book>} Array dari buku
   */
  getAllBook() {
    return this.bookData;
  }

  /**
   * Mencari buku berdasarkan filter yang diberikan
   * @param {string} name Nama buku
   */
  filter({ name, reading, finished } = { name: '', reading: null, finished: null }) {
    return this.getAllBook().filter((el) => {
      if (name && !el.name
        .toLowerCase()
        .includes(name.toLowerCase())) {
        return false;
      }

      if (reading !== null && el.reading !== reading) {
        return false;
      }

      if (finished !== null && el.isFinished() !== finished) {
        return false;
      }

      return true;
    });
  }
}

exports.default = Bookshelf;
