const mongoose = require('mongoose');

const URI ='mongodb+srv://LenaK:userdb@oncall-tracker.plnbt.mongodb.net/oncall-tracker?retryWrites=true&w=majority';

const connectDB = async () => {
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('db connected ..!');
}

module.exports = connectDB;
