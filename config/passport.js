
const passport = require('passport');

const  UserDetails = require("../models/userDetails");
passport.use(UserDetails.createStrategy());
passport.serializeUser(UserDetails.serializeUser());
passport.deserializeUser(UserDetails.deserializeUser());



// UserDetails.register({username:'glaucio', active: false}, 'glaucio')

module.exports = passport;