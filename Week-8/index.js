const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ running: true });
  });

  app.get('/user', (req, res) => {
    res.status(200).json({ users: [] });
  });

let server = app.listen(PORT, () => {
    console.log(`The server is running on localhost:${PORT}`);
})

module.exports = server;