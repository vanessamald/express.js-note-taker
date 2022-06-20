const express = require('express');
const router = require('express').Router();

const path = require('path');
const fs = require('fs');
const getNotes = require('../Develop/db/db.json');

// package to create random id
const { v4: uuidv4 } = require('uuid');

// parse json POST data
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// api get route
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/db/db.json'));   
});

// api post route
router.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    // parse saved notes, set note id and push data to req.body
    const notes = JSON.parse(fs.readFileSync('./Develop/db/db.json'));
    let newNote = req.body;
    newNote.id = uuidv4();
    notes.push(newNote);
    
    // add new note to db.json
    fs.writeFileSync('./Develop/db/db.json', JSON.stringify(notes))
    res.json(notes);

    console.log(newNote);
})

// api delete route
router.delete('/notes/:id', (req, res) => {
    // parse json data, filter through notes by id 
    const notes = JSON.parse(fs.readFileSync('./Develop/db/db.json'));
    const deleteNote = notes.filter(({id}) => id !== req.params.id);
    
    // rewrite json data
    const newNotes = fs.writeFileSync('./Develop/db/db.json', JSON.stringify(deleteNote));
    res.json(deleteNote);

    console.log('Note has been deleted!'); 
});

module.exports = router;