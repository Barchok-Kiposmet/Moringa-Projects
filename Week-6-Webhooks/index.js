const express = require('express');


const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.post('/', (req, res) => {
    const body = req.body;
    console.log(body);
    
    res.status(200).json({ message: 'success'})
});

app.listen(PORT, () => {
    console.log(`My server is running on PORT ${PORT}`);
});
