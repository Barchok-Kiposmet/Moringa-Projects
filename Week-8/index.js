const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ running: true });
  });

let server = app.listen(PORT, () => {
    console.log(`The server is running on localhost:${PORT}`);
})

module.exports = server;