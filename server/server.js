const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors');

const app = express();
const port = 3001; // Port number for server side

// Connect to SQLite database
const db = new sqlite3.Database('./mini-blog.db', (err) => {
    if(err) {
        console.error(err.message);
    }
    console.log('Connected to the mini-blog database')
})

app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // For parsing JSON data in requests

// Add API endpoints here

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})