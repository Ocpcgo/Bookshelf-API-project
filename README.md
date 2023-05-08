# Bookshelf-API-project

This is a RESTful API for managing a bookshelf. It allows you to perform CRUD (Create, Read, Update, Delete) operations on books.

### Installation
1. Clone this repository.
2. Install dependencies by running `npm install`.

### Usage
1. Start the server by running `npm start`.
2. The API can be accessed at `http://localhost:9000` (You can change the port to 5000 if your computer does not open port 9000).

## API endpoints
### Get /books
Get all book in the database.
Optional query parameters :
- `name` : Filter books by name.
- `reading` : Filter books by reading status (0 for not read, 1 for reading).
- `finished`: Filter books by finished status (0 for not finished, 1 for finished).

### Get /books/{bookId}
Get a specific book by Id.

### Post /books
Add a new book to the database.
Request body sample:
```
{
    "name": "The Catcher in the Rye",
    "year": 1951,
    "author": "J. D. Salinger",
    "summary": "The story is narrated by Holden Caulfield, a teenage boy who has been expelled from school. Holden decides to leave his prep school early and head to New York City, where he plans to enjoy himself before returning home.",
    "publisher": "Little, Brown and Company",
    "pageCount": 277,
    "readPage": 47,
    "reading": true
}
```

### Put /books/{bookId}
Update an existing book in the bookshelf.
Request body sample:
```
{
    "name": "The Catcher in the Rye",
    "year": 1951,
    "author": "J. D. Salinger",
    "summary": "The story is narrated by Holden Caulfield, a teenage boy who has been expelled from school. Holden decides to leave his prep school early and head to New York City, where he plans to enjoy himself before returning home.",
    "publisher": "Little, Brown and Company",
    "pageCount": 277,
    "readPage": 47,
    "reading": true
}
```

### Delete /books/{bookId}
Delete a book from the database.

## License and Acknowledgements
This project is part of the Dicoding Back End bootcamp and is licensed under the MIT License.
