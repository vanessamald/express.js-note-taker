const fs = require('fs');
const path = require('path');


//const apiRoutes = require('./Develop/public/assets/js');

// api routes
const notes = require('./Develop/db/db.json');

// require express
const express = require('express');
const { readList } = require('./Develop/db/db');

// initiate the server
const app = express();

//app.use(express.static(path.join(__dirname, './Develop/public/assets/js/index.js')));

// parse string or array of incoming data POST data
app.use(express.urlencoded({ extended: true }));

// parse json POST data
app.use(express.json());
// middleware for css
app.use(express.static('public'));

// add index.js
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
    //res.send('Hello World!');
});

// GET api route
app.get('/api/notes', (req, res) => {
    res.json(req.body);
    console.log(req.body);




});

// POST api route ROUTE TESTED AND WORKING
app.post('/api/notes', (req, res) => {
    //TESTING HERE
    console.info(`${req.method} request received to add a note`);
    
    // destructure req.body
    const [ {title, text} ] = req.body

    // if properties exist
    if (title && text) {

    // variable for notes 
    const newNote = {
        title,
        text
    };

    // obtain existing notes
    fs.readFile('./Develop/db/db.json', 'utf8', (err, data) => {
    
    res.json(req.body);
    //console.log(req.body);
        if (err) {
            console.error(err);
        } else {
            // convert string to JSON object
            const parsedNotes = JSON.parse(data);
            // parse data
            parsedNotes.push(newNote);

            
            fs.writeFileSync('./Develop/db/db.json', JSON.stringify(parsedNotes, null, 4),
            (writeErr) =>
            writeErr
            ? console.error(writeErr)
            : console.info('SUCCESS!!!')
           );
        }
      });
  
    

    
    }
});
            
// wildcard route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

// server listener
app.listen(3001, () => {
    console.log('PROJECT NOW ON PORT 3001!')
});