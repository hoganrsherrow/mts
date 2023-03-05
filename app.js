const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Static middleware
app.use(express.static(path.join(__dirname, 'public'))); // Later rename to public once MVC is setup
//app.use(express.static('index.html'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

console.log(`hello from app.js`);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});