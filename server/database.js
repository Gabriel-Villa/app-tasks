const mongoose = require('mongoose');
const DB = process.env.DB;

mongoose.connect(DB ? DB : 'mongodb://localhost/dv-db-app', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const connection = mongoose.connection;
connection.once('open', () => {
    console.log(`Db connected`);
});