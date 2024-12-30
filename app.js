const express = require('express');
const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static('public'));

// Route to render homepage
const homeRoute = require('./routes/home');
app.use('/', homeRoute);

// Route to handle video download
const downloadRoute = require('./routes/download');
app.use('/download', downloadRoute);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

