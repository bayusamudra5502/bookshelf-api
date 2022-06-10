class Bookshelf {
  constructor() {
    /**
      Kumpulan data buku
      @type {object}
     */
    this.bookData = {};
  }

  /**
   * Menambahkan buku pada daftar
   * @param {Book} bookData Objek Buku
   * @throws {Error} Jika buku sudah ada
   * @returns {Bookshelf} Objek Bookshelf itu sendiri
   */
  addBook(bookData) {
    const id = bookData.getId();

    if (id in this.bookData) {
      throw new Error({
        code: 1,
        message: 'Data buku sudah ada',
      });
    }

    this.bookData[id] = bookData;
    return this;
  }

  /**
   * Menghapus data buku
   * @param {string} id
   * @throws {Error} jika id buku tidak ditemukan
   * @returns {Bookshelf} Objek Bookshelf itu sendiri
   */
  deleteBook(id) {
    if (!(id in this.bookData)) {
      throw new Error({
        code: 2,
        message: 'Id buku tidak ditemukan',
      });
    }

    delete this.bookData[id];
    return this;
  }

  /**
   * Update data buku
   * @param {string} id
   * @throws {Error} jika id buku tidak ditemukan
   * @returns {Bookshelf} Objek Bookshelf itu sendiri
   */
  updateBook(id, bookData) {
    if (!(id in this.bookData)) {
      throw new Error({
        code: 2,
        message: 'Id buku tidak ditemukan',
      });
    }

    this.bookData[id].updateBook(bookData);
    return this;
  }
}

exports.default = Bookshelf;
