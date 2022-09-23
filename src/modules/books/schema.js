const { gql } = require('apollo-server');

module.exports = gql`
	type Book {
		id: ID!
		title: String!
		author: String!
		time: time
		refid: number
		users: User!
	}

	extend type Mutation {
		newBook(title: String!, author: String!, refid: number): Book!
		updateBook(
			title: String!
			author: String!
			refid: number
			bookId: ID!
		): Book!
		deleteBook(bookId: ID!): Book!
	}

	extend type Query {
		books(userID: ID!): [Book!]!
	}
`;
