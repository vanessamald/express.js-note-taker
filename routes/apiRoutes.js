const express = require('express');
const router = require('express').Router();

const path = require('path');
const fs = require('fs');
const getNotes = require('../Develop/db/db.json');

// npm package to create random id
const { v4: uuidv4 } = require('uuid');

// parse json POST data
router.use(express.json());
// parse string or array of incoming data POST data
router.use(express.urlencoded({ extended: true }));

//const db = require('../Develop/db/db.json');

// api get route
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/db/db.json'));   
});

// api post route
router.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    const notes = JSON.parse(fs.readFileSync('./Develop/db/db.json'));
    let newNote = req.body;
    newNote.id = uuidv4();
    notes.push(newNote);

    fs.writeFileSync('./Develop/db/db.json', JSON.stringify(notes))
    res.json(notes);

    console.log(newNote);
})

// get a note with id
//router.get('/api/notes/:id', (req, res) => {
    //res.json(notes[req.params.id]);
//});

// delete note

// api delete route
router.delete('/notes/:id', (req, res) => {
    
    // parse json data
    const notes = JSON.parse(fs.readFileSync('./Develop/db/db.json'));
    
    // filter through notes and delete note by id
    const deleteNote = notes.filter(({id}) => id !== req.params.id);
    

    // rewrite json data
    const newNotes = fs.writeFileSync('./Develop/db/db.json', JSON.stringify(deleteNote));
    res.json(deleteNote);
    console.log('Note has been deleted!');
    
});



module.exports = router;