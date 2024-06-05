const jwt = require('jsonwebtoken');
const User = require('../models/User');

const requireAuth = (req, res, next) =>{
    const token = req.cookies.newCookie;

    // check json webtoken exists and is verified
    if (token){
        jwt.verify(token, 'henrik secret', (err, decodedToken) =>{
            if (err) {
                console.log(err.message);
                res.redirect('/login');
            } else{
                console.log(decodedToken);
                next();
            }
        })
    }
    else {
        res.redirect('/login');
    }
}

// check current user
const checkUser =  (req, res, next) => {
    const token = req.cookies.newCookie;
    console.log(token)
    if (token){
        jwt.verify(token, 'henrik secret', async (err, decodedToken) => {
            if (err) {
                res.locals.user = null;
                next();
            } else{
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                console.log(user.username, "USERNAME1");
                req.user = {username:user.username};
                next();
            }
        }) 
    }
    else{
        res.locals.user = null;
        next();
    }
}

module.exports = { requireAuth, checkUser };