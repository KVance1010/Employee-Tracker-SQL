const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table');

// Question array for inquirer prompt
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
	showEmployeeByManager,
	showEmployeeByDepartment,
	viewTotalByD
} = require('./src/questionsArray');

// Queries object with a list of queries
let queries = require('./src/queries');

// mysql -u (database) -h (host) -p (password)
// Database connection object
const con = process.env.JAWSDB_URL || {
	host: 'localhost',
	user: 'root',
	password: 'OZuzzFA^qkfHKJkU9u=8v4=eS+Jt/8%',
	database: 'employee_tracker_db',
};
const dbCon = mysql.createConnection(con);

// Main Menu for the application
const mainMenuPromote = () => {
	inquirer.prompt(mainMenu).then((selection) => {
		console.log(selection.selection);
		switch (selection.selection) {
			case 'view all departments':
				viewInfo(queries.viewAllDepartmentsQuery);
				break;
			case 'view all roles':
				viewInfo(queries.viewAllRolesQuery);
				break;
			case 'view all employees':
				viewInfo(queries.viewAllEmployeesQuery);
				break;
			case 'view all departments total payroll':
				viewInfo(queries.viewDepartmentPayrollQuery);
				break;
			case "view employee's by manager":
				showListValues(
					showEmployeeByManager,
					queries.viewEmployeesByManagerQuery,
					0
				);
				break;
			case 'view employees by department':
				showListValues(
					showEmployeeByDepartment,
					queries.viewAllEmployeesByDepartment,
					0
				);
				break;
			case 'add a department':
				inquirerPrompt(addDepartment, queries.addDepartmentQuery);
				break;
			case 'add a role':
				showListValues(addRole, queries.addRoleQuery, 2);
				break;
			case 'add an employee':
				passInfo(addEmployee, queries.addEmployeeQuery);
				break;
			case "update an employee's role":
				passInfo(updateRole, queries.updateRoleQuery);
				break;
			case "update an employee's manager":
				passInfo(updateManager, queries.updateManagerQuery);
				break;
			case 'delete a department':
				showListValues(deleteDepartment, queries.deleteDepartmentQuery, 0);
				break;
			case 'delete a role':
				showListValues(deleteRole, queries.deleteRoleQuery, 0);
				break;
			case 'delete an employee':
				showListValues(deleteEmployee, queries.deleteEmployeeQuery, 0);
				break;
			case 'view totals by department':
				showListValues(viewTotalByD, queries.viewTotalsByDepartment, 0);
				break;
			default:
				process.exit();
		}
	});
};

// Handle all inquirer prompts and passes a callback function
const inquirerPrompt = (question, query) => {
	inquirer.prompt(question).then((results) => alterInfo(query, results));
};

// displays the information to the console
const displayTable = (displayResults) => {
	console.table(displayResults);
	mainMenuPromote();
};

// displays all view queries
const viewInfo = (query) => {
	dbCon.query(query, (error, result) =>
		error ? console.error(error) : displayTable(result)
	);
};

// Creates and delete information from the table
const alterInfo = (query, results) => {
	const parameters = Object.values(results);
	dbCon.query(query, parameters, (error, result) =>
		error ? console.error(error) : displayTable(result)
	);
};

// Creates the list of employees and roles for the update function
const passInfo = (questions, query) => {
	const arr1 = [];
	const arr2 = [];
	dbCon.query(query[0], (error, result) => {
		if (error) {
			console.error(error);
		} else {
			result.forEach((element) => {
				arr1.push({
					name: element.name,
					value: element.id,
				});
			});
			questions[0].choices = arr1;
			dbCon.query(query[1], (error, returned) => {
				if (error) {
					console.error(error);
				} else {
					returned.forEach((element) => {
						arr2.push({
							name: element.name,
							value: element.id,
						});
					});
					questions[1].choices = arr2;
					updateInfo(query[2], questions);
				}
			});
		}
	});
};

// Updates the user role and manager
const updateInfo = (query, questions) => {
	inquirer.prompt(questions).then((results) => {
		let parameters;
		if (results.role) {
			parameters = [results.employee_first_name, results.employee_last_name, results.role, results.name];
		} else {
			parameters = [results.name, results.employee];
		}

		dbCon.query(query, parameters, (error, result) => {
			if (error) {
				console.error(error);
			} else {
				displayTable(result);
			}
		});
	});
};

// Generic function that takes in a list of question, queries, and and location of the list in the object
const showListValues = (questions, queries, index) => {
	const arr = [];
	dbCon.query(queries[0], (error, returned) => {
		if (error) {
			console.error(error);
		} else {
			returned.forEach((element) => {
				arr.push({
					name: element.name,
					value: element.id,
				});
			});
			questions[index].choices = arr;
			inquirer.prompt(questions).then((results) => {
				// checks to see if there is a results has a title key
				let parameters;
				if (results.title) {
					parameters = [results.title, results.salary, results.name];
				} else {
					parameters = [results.name];
				}
				dbCon.query(queries[1], parameters, (error, result) => {
					error ? console.error(error) : displayTable(result);
				});
			});
		}
	});
};

// Starts the application
mainMenuPromote();
