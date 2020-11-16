const mongoose = require('mongoose')

const FormSchema = mongoose.Schema({


    firstname: String,
    lastname: String,
    phone: String,
    email: String,
    picture: {
        data: Buffer, type: String
    }



})
//collection inside the database

const Form = mongoose.model('FunVid', FormSchema)


module.exports = Form