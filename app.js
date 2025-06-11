const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('music'));

const tracks = [
  {
    id: 1,
    title: "Demo Track 1",
    artist: "Teja",
    genre: "Pop",
    url: "demo1.mp3"
  },
  {
    id: 2,
    title: "Demo Track 2",
    artist: "Teja",
    genre: "Rock",
    url: "demo2.mp3"
  }
];

app.get('/tracks', (req, res) => {
  res.json(tracks);
});

app.get('/tracks/:id', (req, res) => {
  const track = tracks.find(t => t.id === parseInt(req.params.id));
  if (track) res.json(track);
  else res.status(404).send("Track not found");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
