const fs = require('fs');
const path = require('path'); 

module.exports = app => {
    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) throw err; 

        var notes = JSON.parse(data);

        app.get("api/notes", function(req, res) {
            res.json(notes);
        })

        app.post("/api/notes", function(req, res) {
            let newNote = req.body;
            notes.push(newNote);
            updateDb();
            return console.log("Add new note: "+newNote.title);
        });

        app.get("/api/notes/:id", function(req, res) {
            res.json(notes[req.params.id]);
        });

        app.delete("/api/notes:id", function(req, res) {
            notes.splice(req.params.id, 1);
            updateDb();
            console.log("Delted note with id "+req.params.id);
        });
    })
}