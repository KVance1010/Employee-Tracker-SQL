const inquirer = require('inquirer');
const mysql = require('mysql2');

const dbCon = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'OZuzzFA^qkfHKJkU9u=8v4=eS+Jt/8%',
      database: 'employee_tracker_db'
    },
    console.log(`Connected!`)
  );