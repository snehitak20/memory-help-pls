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
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

require('./routes/routes')(app);

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});