const express = require('express');
const ytdl = require('@distube/ytdl-core');
const router = express.Router();

router.get('/', async (req, res) => {
    const videoURL = req.query.url;

    if (!ytdl.validateURL(videoURL)) {
        return res.status(400).send('Invalid YouTube URL.');
    }

    try {    
        const videoInfo = await ytdl.getInfo(videoURL);
        const title = videoInfo.videoDetails.title.replace(/[^a-zA-Z0-9 ]/g, ''); // Sanitize title

        res.header('Content-Disposition', `attachment; filename="${title}.mp4"`);
        ytdl(videoURL, { format: 'mp4', quality: 'highestvideo', filter: (format) => format.hasAudio && format.hasVideo })
        .on('progress', (chunkLength, downloaded, total) => {
                console.log(`Downloading Progress: ${(downloaded / total * 100).toFixed(2)}%`);
            })
        .pipe(res);   
    } catch (err) {
        console.error('Error downloading video:', err);
        res.status(500).send('An error occurred while processing the video.');
    }
});

module.exports = router;

