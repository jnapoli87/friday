const express = require('express')
const stream = require('youtube-audio-stream')
const path = require('path')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
const ffmpeg = require('fluent-ffmpeg')

const app = express()
const url = 'https://www.youtube.com/watch?v=1TewCPi92ro'

ffmpeg.setFfmpegPath(ffmpegPath)

app.get('/audio', (req, res) => {
  try {
    stream(url).pipe(res)
  } catch (ex) {
    res.status(500).send(ex)
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/', 'index.html'));
});

app.listen(3000);
