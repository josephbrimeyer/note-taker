const fs = require("fs");
const notesInfo = require("../db/db.json");

module.exports = function (app) {

    app.delete("/api/notes/:id", function (req, res) {
        let id = req.params.id;
        fs.readFileSync("./db/db.json", JSON.stringify(oldNotes));
        // req.params.id
    }
    )
    app.post("/api/notes", function (req, res) {
        let newNote = req.body;
        newNote.id = Math.floor(Math.random() * 100000);

        const oldNotes = JSON.parse(fs.readFileSync("./db/db.json"));
        oldNotes.push(newNote);

        let status = fs.writeFileSync("./db/db.json", JSON.stringify(oldNotes));
        res.JSON(newNote);
    })

}