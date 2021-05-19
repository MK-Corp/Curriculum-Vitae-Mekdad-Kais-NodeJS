const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// const sqlite3 = require('sqlite3').verbose();

// // open database in memory
// let db = new sqlite3.Database('./projects.db', sqlite3.OPEN_CREATE | sqlite3.OPEN_READWRITE,(err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Connected to projects.db SQlite database.');
// });

// db.run('CREATE TABLE projects (\
// 	project_id INTEGER PRIMARY KEY,\
// 	title TEXT NOT NULL,\
// 	description TEXT NOT NULL,\
// 	link TEXT NOT NULL UNIQUE,\
// );')

// // close the database connection
// db.close((err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
//   });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});