const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect DataBase
connectDB();

app.get('/', (req, res) => res.send('Hello Heroku!'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Hello express!`));
