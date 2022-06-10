const { nanoid } = require('nanoid');

class Book {
  constructor({
    name, year, author, summary, publihser, pageCount, readPage, reading,
  }) {
    /**
      ID Buku
      @type {string}
     */
    this.id = nanoid(12);

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
    this.publisher = publihser;

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
      finished: this.pageCount === this.readPage,
      reading: this.reading,
      insertedAt: this.insertedAt,
      updatedAt: this.updatedAt,
    };
  }

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
  }
}

exports.default = Book;
