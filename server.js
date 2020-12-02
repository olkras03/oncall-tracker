const express = require('express');
const connectDB = require('./DB/Connection');
const app = express();
const path = require('path');

connectDB();
app.use(express.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/userModel', require('./Api/User'));

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/users', (req, res) => {
  res.send('Hellooooooooo!')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'index.html');
});

const Port = process.env.Port || 3000

app.listen(Port, () => console.log('Server started'));
//server can connect to the browser