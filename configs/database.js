"use strict";
const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'expensesdemo'
});

module.exports = pool;