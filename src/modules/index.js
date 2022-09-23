const UserModule = require('./users')
const scalar = require('./scalar')
const BookModule = require('./books')

module.exports = [
    UserModule,
    scalar,
    BookModule
]