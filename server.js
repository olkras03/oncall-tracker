const express = require('express');
// const bodyParser = require('body-parser'); // body-parser is a middleware that helps to handle data from the forms
const connectDB = require('./config/db');
const app = express(); //gives ability to create routes
// const path = require('path');

//Connect DataBase
connectDB();

//Init Middleware 
app.use(express.json({ extended: false }));  //no need for bodyParser, provided with express, allows us to get data from req.body

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/api/userModel', require('./Api/User'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/users', usersRoute);

// app.use(
//   cors({
//     credentials: true,
//     origin: ["http://localhost:3000"] // <== URL of React app (it will be running on port 3000)
//   })
// );

// app.get('/', (req, res) => {

//   // res.sendFile(__dirname, 'index.html');
// });

app.get('/', (req, res) => res.send('API Running'));

const Port = process.env.Port || 5000

app.listen(Port, () => {
  console.log(`Server started on port ${Port}`)
});
//server can connect to the browser