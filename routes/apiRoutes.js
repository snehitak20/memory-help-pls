const db ='db/db.json';
const fs = require ('fs');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        let savedNotes = fs.readFileSync(db) 
        return res.json(JSON.parse(savedNotes));
    });

    app.post('/api/notes', (req, res) => {
        let savedNotes = fs.readFileSync(db) 
        savedNotes = JSON.parse(savedNotes);
        savedNotes.push(req.body);
            
        for (let i = 0; i < savedNotes.length; i++) {
            savedNotes[i].id = i+1;
        }

        fs.writeFileSync(db, JSON.stringify(savedNotes));
        return res.send(db, savedNotes);
    });


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
