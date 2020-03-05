const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Questions = new Schema({
    question:{
        type: String,
        required: true,
    },
    choices:{
        type: String,
    },
    answer:{
        type:String,
    }
})

module.exports = Question = mongoose.model("Question", Questions)
