const inquirer = require('inquirer');
const mysql = require('mysql2');
const displayTable = require('console.table');

const dbCon = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'OZuzzFA^qkfHKJkU9u=8v4=eS+Jt/8%',
      database: 'employee_tracker_db'
    },
    console.log(`Connected!`)
  );

  // view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

  //bonus
  // Update employee managers.

  // * View employees by manager.
  
  // * View employees by department.
  
  // * Delete departments, roles, and employees.