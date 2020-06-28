const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('connection successful!'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Hello express!`));