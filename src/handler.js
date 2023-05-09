const { nanoid } = require("nanoid");
const books = require('./books');

const saveBook = (request, h) => {
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

  if (!name) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });

    response.code(400);
    return response;
  }

  if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });

    response.code(400);
    return response;
  }

  const id = nanoid(16);
  const finished = pageCount === readPage;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  books.push(newBook);

  const response = h.response({
    status: 'success',
    message: 'Buku berhasil ditambahkan',
    data: {
      bookId: id,
    },
  });

  response.code(201);
  return response;
};

const showBooks = (request, h) => {
    const { name, reading, finished } = request.query;
    
    if (name) { 
        book = books.filter((book) => {
            return book.name.toLowerCase() === name.toLowerCase()
        });
    };
    if (reading === '1' || reading === '0'){
        book = books.filter((book) => {
            return book.reading === (reading === '1')
        });
    };

    if (finished === '1' || finished === '0'){
        book = books.filter((book) => {
            return book.finished === (finished === '1')
        });
    };


    const response = h.response({
        status: "success",
        data: {
            books: books.map((book) => ({
                id: book.id,
                name: book.name,
                publisher: book.publisher
            }))
        }
    });
    response.code(200);
    return response;
};
    
const bookDetails = (request, h) => {
    const { bookId } = request.params;
    const book = books.filter((book) => {
        return book.id === bookId;
    })[0];

    if (book !== undefined) {
        const response = h.response({
            status: "success",
            data: {
                book
            }
        }); 
        return response;
    };

    const response = h.response({
        status: "fail",
        message: "Buku tidak ditemukan"
    });
    response.code(404);
    return response;
};

const updateBooks = (request, h) => {
    const { bookId } = request.params;
    const { name, year, author, summary, publisher,
        pageCount, readPage, reading} = request.payload;

    if (!name) {
      const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Mohon isi nama buku'
      })
      response.code(400);
      return response;
    };
    if (readPage > pageCount) {
      const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount'
      });
      response.code(400);
      return response;
    };  

    const index = books.findIndex((book) => book.id === bookId);
    if (index !== -1) {
      books[index] = {
        ...books[index],
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
        updatedAt: new Date().toISOString()
      }
      const response = h.response({
        status: 'success',
        message: 'Buku berhasil diperbarui'
      });
      response.code(200);
      return response;
    }
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan'
    })
    response.code(404);
    return response;
};

const deleteBooks = (request, h) => {
    const { bookId } = request.params;
    const bookIndex = books.findIndex((book) => {
        return book.id === bookId;
    });

    if (bookIndex === -1){
        const response = h.response({
            status: "fail",
            message: "Buku gagal dihapus. Id tidak ditemukan"
        });
        response.code(404);
        return response;
    };

    books.splice(bookIndex, 1);

    const response = h.response({
        status: "success",
        message: "Buku berhasil dihapus"
    });
    response.code(200);
    return response;
}
module.exports = { saveBook, showBooks, bookDetails, updateBooks, deleteBooks };