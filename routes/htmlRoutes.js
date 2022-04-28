// Dependencies
const path = require('path');

// // Immediately exports the function called (app) and does the following:
module.exports = (app)=> {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

//HTML GET Requests (must have "*" listed last):
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'))
    });

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });

};
