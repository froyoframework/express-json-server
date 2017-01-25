"use strict";
const mysql = require('../configs/database');

const Expense = function(description, amount) {
    this.description = description;
    this.amount = amount;
};

Expense.prototype.get = function() {
    return new Promise((resolve, reject) => {
        mysql.getConnection((err, connection) => {
            if(err) reject(err);

            connection.query('SELECT * FROM expenses', (error, results, fields) => {
                connection.release();
                if(error) reject(error);
                resolve(results);
            });
        });
    });
};

Expense.prototype.create = function() {
    return new Promise((resolve, reject) => {
        mysql.getConnection((err, connection) => {
            if(err) reject(err);

            let post = {
                description: this.description,
                amount: this.amount,
                created_at: '2017-01-01 00:00:00'
            };

            connection.query('INSERT INTO expenses SET ?', post, (error, results, fields) => {
                connection.release();
                if(error) reject(error);
                resolve(results);
            });
        });
    });
};

Expense.prototype.update = function(expenseId) {
    return new Promise((resolve, reject) => {
        mysql.getConnection((err, connection) => {
            if(err) reject(err);

            let post = [this.description, this.amount, '2017-01-02 00:00:00', expenseId];

            connection.query('UPDATE expenses SET description = ?, amount = ?, updated_at = ? WHERE id = ?', post, (error, results, fields) => {
                connection.release();
                if(error) reject(error);
                resolve(results);
            });
        });
    });
};

Expense.prototype.delete = function(expenseId) {
    return new Promise((resolve, reject) => {
        mysql.getConnection((err, connection) => {
            if(err) reject(err);

            let post = [this.description, this.amount, '2017-01-02 00:00:00', expenseId];

            connection.query('DELETE FROM expenses WHERE id = ' + expenseId, post, (error, results, fields) => {
                connection.release();
                if(error) reject(error);
                resolve(results);
            });
        });
    });
};

module.exports = Expense;
