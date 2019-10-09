//MONGODB PW: VHqUGlBRquZNynH7
//MONGODB CONNECTION: mongodb+srv://luckidubi:<password>@cluster0-ogi9i.mongodb.net/test?retryWrites=true&w=majority
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://luckidubi:VHqUGlBRquZNynH7@cluster0-ogi9i.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }).then(() => {
    console.log('MongoDB Atlas Connection successful');
}).catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
});

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);


module.exports = app;