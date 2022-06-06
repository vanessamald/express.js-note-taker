const fs = require('fs');
const path = require ('path');

const express = require('express');

const router = express.Router();
// Helper method for generating unique ids
//const uuid = require('./helpers/uuid');

const notes = require('../Develop/db/db.json');

// GET route
router.get('/api/notes', async function (req, res) {
    res.json(notes);
    //res.send('HELLO TESTING');
});

// POST route
router.post('/api/notes', (req, res) => {
    res.json(req.body)
});


module.exports = router;