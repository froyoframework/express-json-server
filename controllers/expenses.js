"use strict";
const ExpenseModel = require('../models/expense'); 
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const expense = new ExpenseModel('', '');
    expense.get()
        .then((result) => res.json({data: result}))
        .catch((error) => res.json({error: error}));
});

router.post('/', (req, res) => {
    const expense = new ExpenseModel(req.query.description, req.query.amount);
    expense.create()
        .then((result) => res.json({data: result}))
        .catch((error) => res.json({error: error}));
});

router.delete('/:id', (req, res) => {
    const expense = new ExpenseModel('', '');
    expense.delete(req.params.id)
        .then((result) => res.json({data: result}))
        .catch((error) => res.json({error: error}));
});

module.exports = router;