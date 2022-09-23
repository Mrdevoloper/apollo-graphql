const model = require('./model');
const userModule = require('../users/model');

module.exports = {
	Query: {
		books: async (_, { userID }) => await model.getBooks(userID),
	},
	Mutation: {
		newBook: async (_, { title, author, refid }) =>
			await model.postBooks(title, author, refid),
		updateBook: async (_, { title, author, refid, bookId }) =>
			await model.updateBook(title, author, refid, bookId),
		deleteBook: async (_, { bookId }) => await model.deleteBook(bookId),
	},
	Book: {
		id: (global) => global.book_id,
		title: (global) => global.book_title,
		author: (global) => global.book_author,
		time: (global) => global.book_created_at,
		refid: (global) => global.user_ref_id,
		users: async (global) => await userModule.getUser(global.user_ref_id),
	},
};
