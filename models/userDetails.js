const mongoose = require("../config");
const passportLocalMongoose = require('passport-local-mongoose')

const Schema = mongoose.Schema;

const UserDetail = new Schema({
    username: String,
    password: String
})

UserDetail.plugin(passportLocalMongoose);
const UserDetails = mongoose.model('userInfo', UserDetail, 'userInfo');

module.exports = UserDetails;