const express = require("express");

const app = express();
const cors = require("cors");
const config = { port: process.env.PORT || 3000 };
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});
//Methods: .generateWords(numb), .generateSentences(numb), generateParagraphs(numb)

// middleware
app.use(cors());

// your API route(s) here
app.get("/lorem", (req, res) => {
  const loremText = lorem.generateSentences(5);
  res.json({ lorem: loremText });
});

app.get("*", function (req, res) {
  res.status(404).json({ error: "route not found" });
});

// start server
app.listen(config.port, () => {
  console.log(`App listening at http://localhost:${config.port}`);
});
