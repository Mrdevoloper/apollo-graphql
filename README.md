# install dependencies
npm install

# start the server (GraphiQL is started at http://localhost:7000) or (https://apollo-serverr.herokuapp.com)
npm start

# use nodemon in development to automatically reload the server on changes
npm install -g nodemon
nodemon --exec npm start


# get users and books

 query{
  users{
    id
    firstname
    lastname
    age
    isfree
    time
    books{
       id
       title
       author
       time
    }
  }
}


# get books user BY

query {
  books(userID: 1) {
    id
    title
    author
    time
    users {
      id
      firstname
      lastname
      age
      isfree
      time
    }
  }
}


# Create newUser


mutation newUser(
  $firstname: String!
  $lastname: String!
  $age: number!
  $isfree: String!
) {
  newUser(
    firstname: $firstname
    lastname: $lastname
    age: $age
    isfree: $isfree
  ) {
    id
    firstname
    lastname
    age
    isfree
    time
  }
}

# Query variables

exmple user:

{
  "firstname": "saloh",
  "lastname": "amin",
  "age": 12,
  "isfree": "true"
}

# delete user


mutation {
   deleteUser(id:3){
    firstname
  }
}

# update user

mutation   updateUser(
  $id:ID!
  $firstname: String!
  $lastname: String!
  $age: number!
  $isfree: String!
) {
  updateUser(
    id:$id
    firstname: $firstname
    lastname: $lastname
    age: $age
    isfree: $isfree
  ) {
    id
    firstname
    lastname
    age
    isfree
    time
  }
}

# example user

{
  "id": 4,
  "firstname": "salohdddd",
  "lastname": "amin",
  "age": 12,
  "isfree": "true"
}

# BOOKS CRUD IS LIKE THIS IT IS SIMILAR AND YOU CAN DO IT AS MY BOOKS SCHEMA
