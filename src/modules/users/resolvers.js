const model = require('./model');
const bookModel = require('../books/model');

module.exports = {
	Query: {
		users: async (_, {}) => {
			return await model.getUsers();
		},
	},

	Mutation: {
		newUser: async (_, { firstname, lastname, age, isfree }) => {
			const createUser = await model.postUser(
				firstname,
				lastname,
				age,
				isfree,
			);
			return createUser;
		},

		updateUser: async (_, { firstname, lastname, age, isfree, id }) => {
			const updateUser = await model.updateUser(
				firstname,
				lastname,
				age,
				isfree,
				id,
			);
			return updateUser;
		},
		deleteUser: async (_, { id }) => await model.deletUser(id),
	},

	User: {
		id: (global) => global.user_id,
		firstname: (global) => global.user_first_name,
		lastname: (global) => global.user_last_name,
		age: (global) => global.user_age,
		isfree: (global) => global.user_isfree,
		time: (global) => global.user_created_at,
		books: async (global) => await bookModel.getBooks(global.user_id),
	},
};
