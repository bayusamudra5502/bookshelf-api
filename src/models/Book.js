export default class Book {
  constructor({
    id, name, year, author, summary, publisher, pageCount, readPage, reading,
  }) {
    /**
      ID Buku
      @type {string}
     */
    this.id = id;

    /**
      Nama buku
      @type {string}
     */
    this.name = name;

    /**
      Tahun terbit buku
      @type {number}
     */
    this.year = year;

    /**
      Pengarang Buku
      @type {string}
    */
    this.author = author;

    /**
      Sinopsis/Ringkasan Buku
      @type {string}
     */
    this.summary = summary;

    /**
      Peneribit buku
      @type {string}
     */
    this.publisher = publisher;

    /**
      Jumlah halaman
      @type {number}
     */
    this.pageCount = pageCount;

    /**
     Jumlah halaman yang dibaca
     @type {number}
     */
    this.readPage = readPage;

    /**
      Status buku dibaca
      @type {boolean}
     */
    this.reading = reading;

    /**
      Timestamp objek dibuat
      @type {string}
     */
    this.insertedAt = new Date().toISOString();

    /**
      Timestamp objek diupdate
      @type {string}
     */
    this.updatedAt = this.insertedAt;
  }

  /**
   * Mendapatkan data buku
   * @returns {Object} Objek data buku
   */
  getObject() {
    return {
      id: this.id,
      name: this.name,
      year: this.year,
      author: this.author,
      summary: this.summary,
      publisher: this.publisher,
      pageCount: this.pageCount,
      readPage: this.readPage,
      finished: this.isFinished(),
      reading: this.reading,
      insertedAt: this.insertedAt,
      updatedAt: this.updatedAt,
    };
  }

  /**
   * Mengembalikan true bila buku sudah selesai dibaca
   * @returns {boolean}
   */
  isFinished() {
    return this.pageCount === this.readPage;
  }

  /**
   * Update data buku
   * @returns {Book} objek buku saat ini
   */
  update({
    name, year, author, summary, publisher, pageCount, readPage, reading,
  }) {
    this.name = name ?? this.name;
    this.year = year ?? this.year;
    this.author = author ?? this.author;
    this.summary = summary ?? this.summary;
    this.publisher = publisher ?? this.publisher;
    this.pageCount = pageCount ?? this.pageCount;
    this.readPage = readPage ?? this.readPage;
    this.reading = reading ?? this.reading;

    this.updatedAt = new Date().toISOString();
    return this;
  }

  /**
   * Mendapatkan ID buku
   * @returns {string} ID
   */
  getId() {
    return this.id;
  }
}
