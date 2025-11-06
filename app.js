const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MY_MESSAGE || 'Hej världen!';

app.get('/', (req, res) => {
  res.send(MESSAGE);
});

app.listen(PORT, () => {
  console.log(`Server körs på port ${PORT}`);
});
