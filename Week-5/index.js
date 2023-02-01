    //Imports
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const blogRoutes = require('./routes/blog');


const PORT = process.env.PORT;

//connect app to mongodb
const connectionString = process.env.DATABASE_URL;
mongoose.connect(connectionString);

const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.on('connected', () => {
    console.log('Database connected');
});

// Create an express app
const app = express();
app.use('/blog', blogRoutes);


app.listen(PORT, () => {
    console.log('My server is running on PORT ${PORT}');
});


