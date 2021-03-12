const mongoose = require('mongoose');

const Schema= mongoose.Schema;

const userSchema= new Schema({
    name : {
        type : String
    },
    id:{
        type : Number
    },
    playlist : [
        {
            name : {
                type : String,
                Unique : true
            },
            link : String
        }
    ]
});

const User=mongoose.model('user',userSchema);

module.exports = User;