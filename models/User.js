const mongoose = require('mongoose');

const user = new mongoose.Schema({
    firstName: {
        type: String
    }
});

module.exports = User = mongoose.model('user', user);