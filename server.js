const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({extend: false}));
app.use(express.json());
// Conntect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your MySQL username
        user: 'root',
        // Your MySQL password
        password: 'wizzle13',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

db.query(`SELECT * FROM candidates`, (err,rows) => {
    console.log(rows);
});

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});
// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

// starts the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});