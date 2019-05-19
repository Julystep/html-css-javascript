const express = require('express');

const fs = require('fs');

router = express.Router();

router.get('/', (req, res) => {
    console.log(req.query.name);
    res.render('./异步传输.html');
})

module.exports = router;

