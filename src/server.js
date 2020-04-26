const express = require('express');
const path = require('path');
const port = process.env.PORT || "8080";
const app = express();
const publicPath = path.join(__dirname, '..', 'dist');
app.use(express.static(publicPath));// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(port, () => {
    console.log('server is up on port', port)
});