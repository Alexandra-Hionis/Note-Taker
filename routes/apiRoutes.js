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
