const express = require('express');

const app = express();

const path = require('path');

router = require('./router/router');

app.use('/public/', express.static(path.join(__dirname, './public/')));

app.engine('html', require('express-art-template'));

app.use(router);

app.listen(3000, () => console.log('running...'));