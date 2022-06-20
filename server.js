// require express
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// initiate express app
const app = express();

const PORT = process.env.PORT || 3001;



// middleware for css and js static files
app.use(express.static('Develop/public'))
app.use('assets/css', express.static(__dirname + 'public/assets/css'))
app.use('assets/js', express.static(__dirname + 'public/assets/js'))
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
/*
const path = require('path');
const fs = require('fs');
const notes = require('./Develop/db/db.json');
*/

/*
const { readList } = require('./Develop/db/db');
const { get } = require('express/lib/request');



// GET api route
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/db/db.json'));
    //res.json(req.body);
    //console.log(req.body);
    //res.json(notes);
    //res.json(notes.slice(1));
      // Send a message to the client
  //res.json(`${req.method} request received to get notes`);

  // Log our request to the terminal
  //console.info(`${req.method} request received to get notes`);
});
*/

/*
function createNewNote(body, notesArray) {
    const newNote = body;
    if (!Array.isArray(notesArray))
        notesArray = [];

    if (notesArray.lenght === 0)
    notesArray.push(0);

    notesArray.push(newNote);
    fs.writeFileSync(path.join(__dirname, './Develop/db/db.json'),
    JSON.stringify(notesArray, null, 2));
    return newNote;
}
*/

/*
// POST api route ROUTE TESTED AND WORKING
app.post('/api/notes', (req, res) => {
    //TESTING HERE
    console.info(`${req.method} request received to add a note`);
    
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
        
         
          })
*/
    

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
  
   
    }
*/

/*
function updateNotes(body, notesArray) {
    const newNote = body;
    notesArray.push(newNote);
   
    fs.writeFileSync(path.join(__dirname, './Develop/db/db.json'), 
    JSON.stringify({notes: notesArray}), null, 2)
    return newNote;
    };
 */  


/*

*/

  




// server listener
app.listen(PORT, () => {
    console.log(`PROJECT NOW ON PORT ${PORT}`);
});