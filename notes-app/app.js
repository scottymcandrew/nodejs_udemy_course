// const validator = require('validator')
import validator from 'validator'
const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)

console.log(validator.isEmail('scotty@example.com'))
console.log(validator.isURL('www@@£@google.com'))