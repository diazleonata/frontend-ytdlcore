const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>YouTube Downloader</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    padding: 50px;
                }
                input, button {
                    padding: 10px;
                    margin: 5px;
                    font-size: 16px;
                }
            </style>
        </head>
        <body>
            <h1>YouTube Video Downloader</h1>
            <form action="/download" method="get">
                <input type="text" name="url" placeholder="Enter YouTube URL" required />
                <button type="submit">Download</button>
            </form>
        </body>
        </html>`);
});

module.exports = router;

