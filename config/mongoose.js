const mongoose = require('mongoose');

module.exports = (app) => {
    mongoose.connect('mongodb://localhost/playersDB', { useNewUrlParser: true, useUnifiedTopology: true })
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', console.log.bind(console, 'DB Connected!'));

    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
}