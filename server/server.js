const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + './../')); //serves the index.html
app.listen(3000, () => {console.log('listening on port 3000')}); //listens on port 3000 -> http://localhost:3000/
