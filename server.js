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
    //console.log('connected as id' + connection.threadId)
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
        //Switch/Case to run the selected option from the beginning list.
    }).then((answer) => {
        switch (answer.action) {
            case "View all employees":
                listEmployee();
                break;
            case 'Add an employee':
                createEmployee();
                break;
            case 'View all departments':
                listDepartments();
                break;
            case 'Add a department':
                break;
            case 'View all roles':
                listRoles();
                break;
            case 'Add a role':
                break;
            case 'Close the application':
                break;
            default:
                break;
        }
    })
};

//Function to search the DB for all employees and return their information in a table.
const listEmployee = () => {
    const query = 'SELECT * FROM employee';
    connection.query(query, (error, response) => {
        if (error) throw error;
        console.log(response.length + ' employee(s) found.');
        console.table('All Employees:', response);
        beginProgram();
    });
};

//Function to search the DB for all departments and return their information in a table.
const listDepartments = () => {
    const query = 'SELECT * FROM department';
    connection.query(query, (error, response) => {
        if (error) throw error;
        console.log(response.length + ' department(s) found.');
        console.table('All departments:', response);
        beginProgram();
    });
};

//Function to search the DB for all roles and return their information in a table.
const listRoles = () => {
    const query = 'SELECT * FROM role';
    connection.query(query, (error, response) => {
        if (error) throw error;
        console.log(response.length + ' role(s) found.');
        console.table('All roles:', response);
        beginProgram();
    });
};

//Function to create a new employee and add them to the db.
const createEmployee = () => {
    connection.query('SELECT * FROM role', (error, response) => {
        if (error) throw error;
        inquirer.prompt([
            {
                name: 'first_name',
                type: 'input',
                message: 'Please enter the first name of the new employee:'
            },
            {
                name: 'last_name',
                type: 'input',
                message: 'Please enter the last name of the new employee:'
            },
            {
                name: 'role',
                type: 'list',
                choices: () => {
                    var roles = [];
                    for (let i = 0; i < response.length; i++) {
                        roles.push(response[i].title);
                    }
                    return roles;
                },
                message: "Please enter the role of the new employee:"
            }
        ]).then((answer) => {
            let roleID;
            for (let j = 0; j < response.length; j++) {
                if (response[j].title == answer.role) {
                    roleID = response[j].id;
                    console.log(roleID)
                }
            }
            connection.query(
                "INSERT INTO employee SET ?",
                {
                    first_name: answer.first_name,
                    last_name: answer.last_name,
                    role_id: roleID,
                },
                (error) => {
                    if (error) throw error;
                    console.log("Your employee has been created and added to the database.");
                    beginProgram();
                }
            )
        });
    });
};