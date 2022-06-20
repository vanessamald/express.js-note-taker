const express = require('express');
const router = require('express').Router();

const path = require('path');
const fs = require('fs');
const getNotes = require('../Develop/db/db.json');

const util = require('util');
const { json } = require('express/lib/response');
const readFileAsync = util.promisify(fs.readFile);

// parse json POST data
router.use(express.json());
// parse string or array of incoming data POST data
router.use(express.urlencoded({ extended: true }));

//const db = require('../Develop/db/db.json');

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/db/db.json'));
    
});

router.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    const notes = JSON.parse(fs.readFileSync('./Develop/db/db.json'));
    let newNote = req.body;
    notes.push(newNote);

    fs.writeFileSync('./Develop/db/db.json', JSON.stringify(notes))
    res.json(notes);

    console.log(newNote);
})
    /*
    // destructure req.body
    const  {title, text}  = req.body

    // if properties exist
    //if (title && text) {

    // variable for notes 
    const newNote = {
        title,
        text
    };

        // obtain existing notes
        fs.readFile('./Develop/db/db.json', 'utf8', (err, data) => {
    
            res.json(req.body);
            JSON.stringify(req.body);
            //const userNotes = JSON.parse(req.body);
            //console.log(userNotes);
            console.log(req.body);
                if (err) {
                    console.error(err);
                } else {
                    // convert string to JSON object
                    const parsedNotes = JSON.parse(data);
                    console.log(parsedNotes);
        
                    //const userNotes = JSON.parse(req.body);
                    //console.log(newNote);
        
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
        
         */
          
          


// get a note with id
router.get('/api/notes/:id', (req, res) => {
    res.json(notes[req.params.id]);
});

// delete note
router.delete('/api/notes/:id', (req, res) => {
    notes.splice(req.params.id, 1);
    updateNotes();
    console.log('NOTE DELETED');
});


module.exports = router;