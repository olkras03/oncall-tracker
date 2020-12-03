const express = require('express');
const bodyParser = require('body-parser'); // body-parser is a middleware that helps to handle data from the forms
const connectDB = require('./DB/Connection');
const app = express(); //gives ability to create routes
const path = require('path');

//Import Routes
const usersRoute = require('./routes/users');


connectDB();
app.use(express.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/userModel', require('./Api/User'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users', usersRoute);

//ROUTES
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname, 'index.html');
});






const Port = process.env.Port || 3000

app.listen(Port, () => console.log('Server started'));
//server can connect to the browser