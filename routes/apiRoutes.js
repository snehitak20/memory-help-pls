// Dependecies 
const db ='db/db.json';
const fs = require ('fs');
// Immediately exports the function called (app) and does the following:
module.exports = (app) => {
        // GET request: should read the db.json file and return ALL saved notes as JSON
        app.get('/api/notes', (req, res) => {
            let savedNotes = fs.readFileSync(db) 
            return res.json(JSON.parse(savedNotes));
        });

        // POST request: receives a new note to save onto the body of the request--> adds it to db.json file and returns the new note to the client 
        app.post('/api/notes', (req, res) => {
            let savedNotes = fs.readFileSync(db) 
            savedNotes = JSON.parse(savedNotes);
            savedNotes.push(req.body);
            
            // Creates a new id for each saved note
            for (let i = 0; i < savedNotes.length; i++) {
                savedNotes[i].id = i+1;
            }
    
            fs.writeFileSync(db, JSON.stringify(savedNotes));
            return res.send(db, savedNotes);
        });

        // DELETE request: 
        app.delete('/api/notes/:id', (req, res) => {
            const {id} = req.params;
            let notes = fs.readFileSync(db) 
            notes = JSON.parse(notes);
            let indexToDelete = notes.filter((each) => each.id != id);
    
            if(!indexToDelete) {
                return res.status(404).json({error: 'No note with that id'}); 
            }

            fs.writeFileSync(db, JSON.stringify(indexToDelete))
            res.send(db, indexToDelete);
        });
};