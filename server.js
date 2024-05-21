const express = require('express');
const pinyin2ipa = require('pinyin2ipa');

const app = express();
const port = 7070;

app.use(express.static(__dirname));

app.get('/convert', (req, res) => {
  const pinyin = req.query.pinyin;
  const ipa = pinyin2ipa(pinyin);
  res.send(ipa);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});