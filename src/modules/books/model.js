const { fetch, fetchAll } = require('../../utils/postgres');

// take a book user by id
const USER_BOOKS = `
    select * from books where user_ref_id = $1
`;

// creating a book
const ADD_BOOKS = `
    insert into books(book_title, book_author, user_ref_id) values($1, $2, $3) RETURNING *
`;

// update a book
const UPDATE_BOOK = `
    update books set book_title = $1, book_author = $2, user_ref_id = $3 where book_id = $4 RETURNING * 
`;
// deleting a book
const DELETE_BOOK = `
    delete from books where book_id = $1 RETURNING *
`;

const getBooks = (userID) => fetchAll(USER_BOOKS, userID);
const postBooks = (book_title, book_author, user_ref_id) =>
	fetch(ADD_BOOKS, book_title, book_author, user_ref_id);
const deleteBook = (book_id) => fetch(DELETE_BOOK, book_id);
const updateBook = (book_title, book_author, user_ref_id, book_id) =>
	fetch(UPDATE_BOOK, book_title, book_author, user_ref_id, book_id);
module.exports = {
	getBooks,
	postBooks,
	deleteBook,
	updateBook,
};
