const express = require("express");
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;

//app.get("/", (req, res) => res.type('html').send(html));

// Express Middleware for serving static files
app.use(express.static(path.join(__dirname, 'scripts')));

//Send html
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => console.log(`Example! JRM app listening on port ${port}!`));


