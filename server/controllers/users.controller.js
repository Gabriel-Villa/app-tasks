const usersController = {}
const User = require('../models/User');
const passport = require('passport');


usersController.loginPage =(req,res) => {
    res.render('users/login');
}

usersController.logUser = passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/notes',
    failureMessage: true
});


usersController.registerPage = (req,res) => {
    res.render('users/register');
}

usersController.singupUser = async (req,res) => {
    const errors = [];
    const { username , email , password , confirm_password} = req.body;
    if(password != confirm_password){
        errors.push({text: "The password are not equals"});
    }
    if(errors.length > 0){
        console.log(errors);
        res.render('users/register', {errors});
    }else{
        const userEmail = await User.findOne({email: email});
        if(userEmail){
            errors.push({text: "The email already exists"});
            res.render('users/register', {errors});
        }else{
            const newUser = await new User({username,email,password});
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            res.redirect('/login');
        }
    }
    
}

usersController.logOut = (req,res) => {
    req.logout();
    res.redirect('/login');
}


module.exports = usersController;