const express = require('express');
const app = express();
const port = 3000;

let refreshCounter = 0;

// Function to randomly return either "yes" or "no" / "maybe" (10% chance)
const getRandomAnswer = () => {
    const randomValue = Math.random();
    if (randomValue < 0.1) {
      return 'maybe';
    } else if (randomValue < 0.55) {
      return 'yes';
    } else {
      return 'no';
    }
  };

// Middleware to increment the refresh counter
app.use((req, res, next) => {
  refreshCounter++;
  next();
});

// /yes or /no
app.get(['/', '/yesno'], (req, res) => {
  const answer = getRandomAnswer();
  res.json({ answer: answer, refreshCount: refreshCounter });
});
const quotes = [
  "The only way to do great work is to love what you do.",
  "Life is what happens when you're busy making other plans.",   

  "Be yourself; everyone else is already taken.",
  "Boobs for Bob"
];

app.get('/random-quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];   

  res.json({ quote: randomQuote });
});


/*
// Endpoint /yes or /no
app.get('/', (req, res) => {
  const answer = getRandomAnswer();
  res.json({ answer: answer, refreshCount: refreshCounter });
});

const getRandEP = () => {
    return randomValue = Math.random() < .5 ? '/yes': '/no';
};

app.use((req, res, next) => {
    if req.url ==
});

app.get(['/yes', '/no'], (req, res) => {
  const answer = getRandomAnswer();
  res.json({ answer: answer, refreshCount: refreshCounter });
});
*/

app.listen(port, () => {
  console.log(`YesNo API is running at http://localhost:${port}`);
});
