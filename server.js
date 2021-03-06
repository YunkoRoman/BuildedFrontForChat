const express = require('express');
const path = require('path');
const dotenv = require( 'dotenv');
const app = express();
dotenv.config();
app.use(express.static(path.join(__dirname,'./Chat')));
const PORT = process.env.PORT;
app.get('*' , function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, 'Chat')})
});

app.listen(PORT, () => {
  console.log(`React started to ${PORT} port...`)
});
