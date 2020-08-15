const usersController = {}

usersController.loginPage =(req,res) => {
    res.render('users/login');
}


usersController.registerPage =(req,res) => {
    res.render('users/register');
}




module.exports = usersController;