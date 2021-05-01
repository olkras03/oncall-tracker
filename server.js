const express = require('express');
const connectDB = require('./config/db');
const app = express(); //gives ability to create routes

//Connect DataBase
connectDB();

//Init Middleware 
app.use(express.json({ extended: false }));  //no need for bodyParser, provided with express, allows us to get data from req.body

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

app.get('/', (req, res) => res.send('API Running'));

const Port = process.env.Port || 5000

app.listen(Port, () => {
  console.log(`Server started on port ${Port}`)
});