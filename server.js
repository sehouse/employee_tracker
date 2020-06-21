const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
require('dotenv').config();

//Link to .env to protect user password.
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

//Initial connection to server to check if it connects.
connection.connect((error) => {
    if (error) throw (error);
    console.log('connected as id' + connection.threadId)
    beginProgram();
});

const beginProgram = () => {
    inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'Welcome to the TJPW Employee Database! Please select an option from the following choices:',
        choices: [
            'View all employees',
            'View all departments.',
            'View all roles',
            'Add an employee',
            'Add a department',
            'Add a role',
            'Close the application'
        ]
    })
}