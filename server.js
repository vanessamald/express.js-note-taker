const fs = require('fs');
const path = require('path');

// require express
const express = require('express');

// initiate the server
const app = express();

// add index.js
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

// middleware for css
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//const { notes } = require('./Develop/public/notes.html');

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
    //res.send('Hello World!');
});



// make our server listen
app.listen(3001, () => {
    console.log('PROJECT NOW ON PORT 3001!')
});