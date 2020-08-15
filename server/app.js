const express = require('express');
const path = require('path');
const morgan = require('morgan');
const flash = require('connect-flash');
const session = require('express-session');
const methodOverride = require('method-override');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//Midlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());


//Global
app.use((req,res,next) => {
    res.locals.success = req.flash('success');
    next();
});

//Static
app.use(express.static(path.join(__dirname, 'public')));



//Routes
app.use(require('./routes/index.routes'));
app.use('/notes', require('./routes/notes.routes'));
app.use(require('./routes/users.routes'));

module.exports = app;