const passport = require('passport');

const path = require("path")
class UserDetailsController {

    formLogin (req, res, next) {
        passport.authenticate('local',
        (err, user, info) => {
           // se der algum erro, encerra e continua o código passando o erro 
           if(err) {
                return next(err)
            }
   
            // Se não encontrou o usuário, volta pra rota do login devolvendo a mensagem de erro
            if( !user) {
                return res.redirect('/login?info='+ info);
            }
   
            //se passar pode autenticar
            req.logIn(user, function(err){
                if(err) {
                    return next(err)
                }
                return res.redirect('/')
            });
   
        })(req, res, next)
    }


    loginForm(req, res){
        res.sendFile('views/login.html', {
        root: path.join(__dirname + '/../')
        })
    }

    index(req, res) {
        res.sendFile('views/index.html', {
        root: path.join(__dirname + '/../')
        });
    }

    private(req, res){
        res.sendFile('views/private.html', {
        root: path.join(__dirname + '/../')
        });
    }

    user(req, res) {
        res.send({user: req.user})
    }

    logout (req, res) {
        req.logout()
        return res.redirect('/login')
    }
}

module.exports = UserDetailsController;