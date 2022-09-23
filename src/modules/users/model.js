const { fetch, fetchAll } = require('../../utils/postgres');
//get all users
const ALL_USERS = `
  select * from users
`;

//get user by id
const USER_BY_ID = `
  select * from users where user_id = $1
`;

//post user
const ADD_USER = `
insert into users(user_first_name, user_last_name,user_age, user_isfree) values($1, $2, $3, $4) RETURNING *;
`;

//update book
const UPDATE_USER = `
  update users set user_first_name = $1, user_last_name = $2, user_age = $3, user_isfree = $4 where user_id = $5 RETURNING * 
`;

//delete book
const DELETE_USER = `
  delete from users where user_id = $1 RETURNING *
`;

const getUsers = () => fetchAll(ALL_USERS);
const getUser = (userID) => fetch(USER_BY_ID, userID);
const postUser = (user_first_name, user_last_name, user_age, user_isfree) =>
	fetch(ADD_USER, user_first_name, user_last_name, user_age, user_isfree);
const updateUser = (
	user_first_name,
	user_last_name,
	user_age,
	user_isfree,
	user_id,
) =>
	fetch(
		UPDATE_USER,
		user_first_name,
		user_last_name,
		user_age,
		user_isfree,
		user_id,
	);
const deletUser = (users_id) => fetch(DELETE_USER, users_id);
module.exports = {
	getUsers,
	getUser,
	postUser,
	updateUser,
	deletUser,
};
