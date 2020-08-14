const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));


app.use(express.urlencoded({extended: false}));



app.use('/', (req,res) => {
    res.send('Hello world');
});


app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;