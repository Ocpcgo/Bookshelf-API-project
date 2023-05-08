const { saveBook, showBooks, bookDetails, 
    updateBooks, deleteBooks } = require("./handler");


const routes = [
    {
        method: "POST",
        path: "/books",
        handler: saveBook
    },
    {
        method: "GET",
        path: "/books",
        handler: showBooks

    },
    {
        method: "GET",
        path: "/books/{bookId}",
        handler: bookDetails
    },
    {
        method: "PUT",
        path: "/books/{bookId}",
        handler: updateBooks
    },
    {
        method: "DELETE",
        path: "/books/{bookId}",
        handler: deleteBooks
    }
]

module.exports = routes;