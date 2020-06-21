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

//Function to begin the Employee Tracker
const beginProgram = () => {
    inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'Welcome to the TNJPW Employee Database! Please select an option from the following choices:',
        choices: [
            'View all employees',
            'Add an employee',
            'View all departments',
            'Add a department',
            'View all roles',
            'Add a role',
            'Close the application'
        ]
    }).then(() => {
        switch (answer.action) {
            case 'View all employees':
                break;
            case 'Add an employee':
                break;
            case 'View all departments':
                break;
            case 'Add a department':
                break;
            case 'View all roles':
                break;
            case 'Add a role':
                break;
            case 'Close the application':
                break;
            default:
                break;
        }
    })
}