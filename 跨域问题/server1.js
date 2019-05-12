const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '\\index1.html');
})

app.listen(5000, () => console.log('running...'));