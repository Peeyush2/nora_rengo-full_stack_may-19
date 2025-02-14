const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    userName: {type:String,required:true},

    email: {type:String,required:true,unique:true},

    password: {type:String,required:true},

    followedBy: [{type: mongoose.Schema.Types.ObjectId, ref: 'Users', unique: true}],

    following:[{type: mongoose.Schema.Types.ObjectId, ref: 'Users', unique:true}]

});

module.exports = mongoose.model('Users',userSchema)