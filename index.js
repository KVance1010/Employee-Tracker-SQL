const prompt = require('inquirer');
const mysql = require('mysql2');
const displayTable = require('console.table');
const {
	mainMenu,
	deleteDepartment,
	deleteRole,
	deleteEmployee,
	addDepartment,
	addRole,
	addEmployee,
	updateManager,
	updateRole,
} = require('./src/questionsArray');

const dbCon = mysql.createConnection(
	{
		host: 'localhost',
		user: 'root',
		password: 'OZuzzFA^qkfHKJkU9u=8v4=eS+Jt/8%',
		database: 'employee_tracker_db',
	},
	console.log(`Connected!`)
);

const mainMenuPromote = () => {
	inquirer.prompt(mainMenu).then((selection) => {
		switch ({selection}) {
      case 'view all departments':

      break;
			case 'view all roles':

      break;
			case 'view all employees':

      break;
      //case  "view employee's manager":

      // break;
			case 'add a department':

      break;
			case 'add a role':

      break;
			case 'add an employee':

      break;
			case "update an employee's role":

      break;
			case "update an employee's manager":

      break;
			case 'delete a department':

      break;
			case 'delete a role':

      break;
			case 'delete an employee':

      break;
		}
	});
};
const viewAllDepartments = () => {};
const deleteDepartmentPromote = () => {};
const deleteDepartmentPromote = () => {};
const deleteDepartmentPromote = () => {};
const deleteDepartmentPromote = () => {};
const deleteRolePromote = () => {};
const deleteEmployeePromote = () => {};
const addDepartmentPromote = () => {};
const addRolePromote = () => {};
const addEmployeePromote = () => {};
const updateManagerPromote = () => {};
const updateRolePromote = () => {};
