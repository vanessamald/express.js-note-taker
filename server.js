const fs = require('fs');
const path = require('path');

const router = require('express').Router();


const PORT = process.env.PORT || 3001;

//const apiRoutes = require('./Develop/public/assets/js');

// require express
const express = require('express');
const { readList } = require('./Develop/db/db');
const { get } = require('express/lib/request');

// initiate the server
const app = express();


// parse string or array of incoming data POST data
app.use(express.urlencoded({ extended: true }));

// parse json POST data
app.use(express.json());

// middleware for css and js static files
app.use(express.static('Develop/public'))
app.use('assets/css', express.static(__dirname + 'public/assets/css'))
app.use('assets/js', express.static(__dirname + 'public/assets/js'))


// GET api route
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/db/db.json'));
    //res.json(req.body);
    //console.log(req.body);
});

// POST api route ROUTE TESTED AND WORKING
app.post('/api/notes', (req, res) => {
    //TESTING HERE
    console.info(`${req.method} request received to add a note`);
    const getNotes = JSON.parse(fs.readFileSync('./Develop/db/db.json'));
    const newNotes = req.body;
    /*
    // destructure req.body
    const [ {title, text} ] = req.body;

    const newNotes =  {
        title,
        text
    };
    */
    //console.log(newNotes);

    getNotes.push(newNotes);
    console.log(newNotes);

    fs.writeFileSync('./Develop/db/db.json', JSON.stringify(getNotes));
    res.json(getNotes);
});
  
// add index.js
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

// add notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
    //res.send('Hello World!');
});
            
// wildcard route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

// server listener
app.listen(PORT, () => {
    console.log(`PROJECT NOW ON PORT ${PORT}`);
});
