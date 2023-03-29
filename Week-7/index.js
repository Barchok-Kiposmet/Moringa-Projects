const app = require ('express')();

app.get('/', (req, res) => {
    console.log('New request');
    res.json({ message: 'Docker is easy'})
});

const port = process.env.PORT || 3000;

app.listen (port, () => {
    console.log(`The app is running on http://localhost:${port}`);
});

