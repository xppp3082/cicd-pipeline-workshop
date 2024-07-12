const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const DB_PWD = process.env.DB_PWD;

app.get('/', (req, res) => {
  res.send('Hello Pipeline 2');
});

app.get('/db', (req, res) => {
  res.send(`DB_PWD: ${DB_PWD}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
