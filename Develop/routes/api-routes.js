const fs = require("fs");
const noteData = require("../db/db.json");

module.exports = (app) => {
  // function writeNote(notes) {
  //     notes = JSON.stringify(notes);
  //     fs.writeFileSync("./db/b.json", notes, function (err) {
  //         if (err) {
  //             return console.log(err);
  //         }
  //     });

  // the GET api
  app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
      if (err) throw err;
      // let noteData = JSON.parse(data)
      // res.send(noteData);
      res.json(JSON.parse(data));
    });
  });

  // the POST api
  app.post("/api/notes", (req, res) => {
    let newNote = {
      title: req.body.title,
      text: req.body.text,
    };
    console.log(newNote);

    newNote.id = Math.floor(Math.random() * 100000);
    console.log(newNote);

    fs.readFile("./db/db.json", "utf-8", (err, notesData) => {
      if (err) {
        throw err;
      }

      let notesInfo = JSON.parse(notesData);
      notesInfo.push(newNote);

      fs.writeFile(
        "./db/db.json",
        JSON.stringify(notesInfo, null, 2),
        (err) => {
          if (err) throw err;
          res.send(notesInfo);
          console.log(notesInfo);
        }
      );
    });
  });
  // console.log(newNote);
  // let oldNotes = JSON.parse(fs.readFileSync("./db/db.json"));
  // console.log(oldNotes);
  // newNote.push(notesInfo);

  // let status = fs.writeFileSync("./db/db.json", JSON.stringify(oldNotes));
  // console.log(status);
  // res.json(newNote);
  // console.log(newNote);

  // DELETE api
  app.delete("/api/notes/:id", (req, res) => {
    let id = req.params.id;
    fs.readFile("./db/db.json", "utf-8", (err, notesInfo) => {
      if (err) throw err;

      for (let i = 0; i < notesInfo.length; i++) {
        if (notesInfo[i] === id) {
          res.send(notesInfo[i]);
          notesInfo.splice(i, 1);
          break;
        }
      }
    });
  });
  // writeNote(notesInfo);
};
