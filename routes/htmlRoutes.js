const path = require('path');
const router = require('express').Router();

// add index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/index.html'));
});

// add notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/notes.html'));
    //res.send('Hello World!');
});
            
// wildcard route
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/index.html'));
});

module.exports = router;