const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const db = require('./db/connection');
const inputCheck = require('./utils/inputCheck');
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({extend: false}));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);

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