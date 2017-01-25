"use strict";
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({data: "welcome to expense tracker"});
});

router.use('/expenses', require('./expenses'));

module.exports = router;