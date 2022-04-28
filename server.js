// Use Express.js (installed)
// Deploy via Heroku??

// Open the Note-taker link--> takes you to landing page with button to NOTES page 
// Click on the NOTES page link 
    // Opens with the notes on the LEFT, and empty area for NEW notes on the RIGHT --> Already done
// New note and title entered --> DONE 
    // SAVE icon appears
// Click the SAVE icon --> DONE
    // Note is saved, MOVES to the RIGHT
// Click the note on the LEFT side, opens on the RIGHT side 
// Click the '+' icon to create a NEW note 
// GET/notes for notes.html
// GET* for index.html 
// API routes: GET/api and POST/api

const express = require('express');

// Setting up express app
const app = express();
const PORT = process.env.PORT || 3001;

//Create empty array 

//const notes= [];

// Making sure all routes go to correct folder (middleware).
app.use(express.static('public'));

//Setting up express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Getting express app routes (api routes need to go first)
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//Starts the server to begin listening
app.listen(PORT, ()=> console.log(`Server listening on http://localhost:${PORT}`));