const fs = require('fs');
const path = require('path');

//const apiRoutes = require('./Develop/public/assets/js');

// api routes
//const { notes } = require('./Develop/db/db');

// require express
const express = require('express');

// initiate the server
const app = express();

// add index.js
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});


//app.use(express.static(path.join(__dirname, './Develop/public/assets/js/index.js')));

// parse string or array of incoming data POST data
app.use(express.urlencoded({ extended: true }));

// parse json POST data
app.use(express.json());
// middleware for css
app.use(express.static('public'));


//const { notes } = require('./Develop/public/notes.html');

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
    //res.send('Hello World!');
});

/* TESTING API ROUTES IN API-ROUTES.JS
// api route
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

// POST route
app.post('/api/notes', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});
*/



//app.use('/notes', apiRoutes);

// TESTING API ROUTES CONNECTION
// api routes
const apiRoutes = require('./routes/api-routes');
app.use(apiRoutes);

// wildcard route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

// server listener
app.listen(3001, () => {
    console.log('PROJECT NOW ON PORT 3001!')
});