const inquirer = require('inquirer');
const mysql = require('mysql2');
const displayVariable = require('console.table');

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
} = require('./src/questionsArray');

// Queries object with a list of queries
let queries = require('./src/queries');

// Database connection object
const dbCon = mysql.createConnection(
	{
		host: 'localhost',
		user: 'root',
		password: 'OZuzzFA^qkfHKJkU9u=8v4=eS+Jt/8%',
		database: 'employee_tracker_db',
	},
	console.log(`Connected!`)
);

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
			case "view employee's by manager":
				showAll(showEmployeeByManager, queries.viewEmployeesByManagerQuery);
				break;
			// case "view employees by department":
			// 	inquirerPrompt(, , alterInfo);
			// 	break;
			case 'add a department':
				inquirerPrompt(addDepartment, queries.addDepartmentQuery, alterInfo);
				break;
			case 'add a role':
				inquirerPrompt(addRole, queries.addRoleQuery, alterInfo);
				break;
			case 'add an employee':
				inquirerPrompt(addEmployee, queries.addEmployeeQuery, alterInfo);
				break;
			case "update an employee's role":
				updateInfo(queries.updateRoleQuery, updateRole);
				break;
			// case "update an employee's manager":
			// 	inquirerPrompt( , queries.updateManagerQuery, alterInfo);
			// 	break;
			// case 'delete a department':
			// 	inquirerPrompt( , queries., alterInfo);
			// 	break;
			// case 'delete a role':
			// 	inquirerPrompt( , queries., alterInfo);
			// 	break;
			// case 'delete an employee':
			// 	inquirerPrompt( , queries., alterInfo);
			// 	break;
			default:
				return;
		}
	});
};

// Handle all inquirer prompts and passes a callback function
const inquirerPrompt = (question, query, nextStep) => {
	inquirer.prompt(question).then((results) => nextStep(query, results));
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
const updateInfo = (query, updateRoles) => {
	const roles = [];
	const employees = [];
	dbCon.query(query[0], (error, result) => {
		if (error) {
			console.error(error);
		} else {
			result.forEach((empName) => {
				employees.push({
					name: `${empName.first_name} ${empName.last_name}`,
					value: empName.id,
				});
			});
			updateRoles[0].choices = employees;
			dbCon.query(query[1], (error, returnedRole) => {
				if (error) {
					console.error(error);
				} else {
					returnedRole.forEach((roleTitle) => {
						roles.push({
							name: roleTitle.title,
							value: roleTitle.id,
						});
					});
					updateRoles[1].choices = roles;
					passRoleAndEmployees(query[2], updateRoles);
				}
			});
		}
	});
};

const showAll = (questions, queries) => {
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
			questions[0].choices = arr;
			inquirer.prompt(questions).then((results) => {
				const parameters = [results.name];
				dbCon.query(queries[1], parameters, (error, result) => {
					if (error) {
						console.error(error);
					} else {
						displayTable(result);
					}
				});
			});
		}
	});
};


// Updates the user role
const passRoleAndEmployees = (query, questions) => {
	inquirer.prompt(questions).then((results) => {
		const parameters = [results.role, results.employee];
		dbCon.query(query, parameters, (error, result) => {
			if (error) {
				console.error(error);
			} else {
				displayTable(result);
			}
		});
	});
};

// Starts the application
mainMenuPromote();
