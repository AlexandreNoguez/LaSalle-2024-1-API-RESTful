require('dotenv').config()
const mongoose = require('mongoose')

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_CLUSTER = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.zspqfad.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        console.log('Database Connected!')
    })
    .catch((err) => console.log(err))

mongoose.Promise = global.Promise;

module.exports = mongoose;
