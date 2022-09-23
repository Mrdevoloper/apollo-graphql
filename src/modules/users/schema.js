const { gql } = require('apollo-server');

module.exports = gql`
	type User {
		id: ID!
		firstname: String!
		lastname: String!
		isfree: String!
		age: number!
		time: time
		books: [Book!]!
	}

	type Mutation {
		newUser(
			firstname: String!
			lastname: String!
			isfree: String!
			age: number!
		): User!
		updateUser(
			id: ID!
			firstname: String!
			lastname: String!
			isfree: String!
			age: number!
		): User!
		deleteUser(id: ID!): User!
	}

	extend type Query {
		users: [User!]!
	}
`;
