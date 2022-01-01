const express = require('express')
const app = express()
const url = 'https://www.youtube.com/watch?v=4z95SAFud7w'
const stream = require('youtube-audio-stream')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
const ffmpeg = require('fluent-ffmpeg')
ffmpeg.setFfmpegPath(ffmpegPath)


app.get('/', (req, res) => {
//   const youtubeUrl = 'http://youtube.com/watch?v=' + req.params.id;
  try {
    stream(url).pipe(res)
  } catch (ex) {
    res.status(500).send(ex)
  }
});
    
app.listen(3000)