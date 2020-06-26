const express = require('express');
const app = express();
const  UserDetails = require("./models/userDetails");
const passport = require('passport');

//permitindo utilizar arquivos estáticos HTML
app.use(express.static(__dirname + "/views"));

const bodyParser = require('body-parser');
const expressSession = require('express-session')({
    secret: 'Hcode',
    resave: false,
    saveUninitialized: false
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(expressSession)

const port = process.env.PORT || 3000;

app.use(passport.initialize())
app.use(passport.session())


passport.use(UserDetails.createStrategy());
passport.serializeUser(UserDetails.serializeUser());
passport.deserializeUser(UserDetails.deserializeUser());

app.listen(port, ()=> console.log('App Running!'))

const userDetailsRouter = require("./routes/uderDetails-routes")

app.use('/', userDetailsRouter);

/*
 UserDetails.register({username:'paul', active: false}, 'paul')
 UserDetails.register({username:'jay', active: false}, 'jay')
 UserDetails.register({username:'roy', active: false}, 'roy')
*/