const fs = require("fs");
const notesInfo = require("../db/db.json");

module.exports = function (app) {

    function writeNote(notes) {
        notes = JSON.stringify(notes);
        console.log(notes);
        fs.writeFileSync("./db/b.json", notes, function (err) {
            if (err) {
                return console.log(err);
            }
        });
    }
    // the GET api
    app.get("/api/notes", function (req, res) {
        res.json(notesInfo);
        console.log(notesInfo);
    });
// the POST api
    app.post("/api/notes", function (req, res) {
        let newNote = req.body;
        console.log(newNote);
        newNote.id = Math.floor(Math.random() * 100000);

        let oldNotes = JSON.parse(fs.readFileSync("./db/db.json"));
        oldNotes.push(newNote);

        let status = fs.writeFileSync("./db/db.json", JSON.stringify(oldNotes));
        res.json(newNote);
    });
    
    // app.delete("/api/notes/:id", function (req, res) {
    //     let id = req.params.id;
    //     fs.readFileSync("./db/db.json", JSON.stringify(oldNotes));
    //     // code here...
    // });
    
    

}