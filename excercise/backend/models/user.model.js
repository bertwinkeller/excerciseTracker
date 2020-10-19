
const mongoose = require('mongoose')

const { Schema } = require("mongoose");

const Schema = mongoose.Schema


const userSchema = new Schema({
    username: {
        username: { type: String, required: true},
        description: { type: String, required: true},
        duration: { type: Number, required: true},
        date: { type: Date, required: true}
    },
},
{
        timestamps: true
    })


    const Excercise = mongoose.model('Excercuse', excerciseSchema)

    module.exports = Excercise