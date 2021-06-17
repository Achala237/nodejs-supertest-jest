const { rejects } = require('assert');
const mysql = require('mysql');
const { resolve } = require('path');
const util = require('util');

const connection = mysql.createConnection({
  host     : 'example.org',
  user     : 'bob',
  password : 'secret'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

// const query = util.promisify(connection.query).bind(connection);


function getCustomers() {
    return new Promise((resolve, rejects) => {
      connection.query('SELECT name, place, address FROM customers', function (error, results) {
        if (error) rejects(error);
        return resolve(results)
      });
    })
}

module.exports = {
    getCustomers
}