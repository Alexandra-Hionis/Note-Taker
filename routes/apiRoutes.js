const router = require("express").Router();
const store = require("db/store.js");

// GET "/api/notes" responds with all notes from the database
router.get("/notes", function(req, res) {
  store
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

router.post("/notes", (req, res) => {
  store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete("/notes/:id", function(req, res) {
  store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch(err => res.status(500).json(err));
});

module.exports = router;






































const note_data = require("../db/note_data");

applicationCache.get("/api/notes/", function (res,req) {
    res.json(note_data);
});

app.post("/api/notes/", function(req,res) {
    note_data.push(req.body);
    res.json(true);
})

app.delete("/api/notes/", function(req,res) {
    note_data.length = 0;

    res.json({ok: true});
    })
