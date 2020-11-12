// Require express to interact with front end
const express = require("express");
// Require compression to improve the performance of our Node. js
const compression = require("compression");
// need path for filename paths
const path = require("path");
// need fs to read and write to files
const fs = require("fs");

// execute express as a function and save the return value in a variable
const app =  express()

// Get server listening
// Use port 3000 unless there exists a preconfigured port
const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Your PORT is ${PORT}`);

// api call response for all the notes, and sends the results to the browser as an array of object
const apiRoutes = require("routes/apiRoutes.js");
const htmlRoutes = require("routes/htmlRoutes.js");

//  Initialize notesData
let notesData = [];
// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(compression());
// Express needs to know where the static files are so they can be served. This should fix error to load html after pressing "Get Started" button
app.use(express.static('public'))
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
// routes


// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));