const express = require('express');
const app = express();


// adicionar quando criar o passport
const passport = require("./config/passport")
//permitindo utilizar arquivos estáticos HTML
app.use(express.static(__dirname + "/views"));

const bodyParser = require('body-parser');


// se for utilizar a autenticação por sessão é necessário 
// iniciar a sessão pelo express antes
const expressSession = require('express-session')({
    secret: 'Hcode',
    resave: false,
    saveUninitialized: false
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(expressSession)

const port = process.env.PORT || 3000;

// adicionar quando criar o passport
app.use(passport.initialize())
app.use(passport.session())

app.listen(port, ()=> console.log('App Running!'))

// adicionar quando criar o routes
const userDetailsRouter = require("./routes/userDetails-routes")

app.use('/', userDetailsRouter);
