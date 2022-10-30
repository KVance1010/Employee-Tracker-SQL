const inquirer = require('inquirer');
const mysql = require('mysql2');
const displayVariable = require('console.table');

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
	viewEmployeesManager
} = require('./src/questionsArray');

let queries = require('./src/queries');

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
			case  "view employee's manager":
			  inquirerPrompt(deleteDepartment, queries.deleteDepartmentQuery, deleteDepartmentPromote);
			  break;
			case 'add a department':
				inquirerPrompt(addDepartment, queries.addDepartmentQuery, addInfo);
				break;
			case 'add a role':
				inquirerPrompt(addRole, queries.addRoleQuery, addInfo);
				break;
			case 'add an employee':
				inquirerPrompt(addEmployee, queries.addEmployeeQuery, addInfo);
				break;
			// case "update an employee's role":
			// 	inquirerPrompt(updateEmployee, queries.updateEmployeeQuery, );
			// 	break;
			// case "update an employee's manager":
			// 	inquirerPrompt(updateManager, queries.updateManagerQuery, );
			// 	break;
			case 'delete a department':
				inquirerPrompt (queries.deleteDepartmentQuery, deleteDepartment, deleteInfo);
				break;
			case 'delete a role':
				inquirerPrompt (queries.deleteRoleQuery, deleteRole, deleteInfo);
				break;
			case 'delete an employee':
				inquirerPrompt (queries.deleteEmployeeQuery, deleteEmployee, deleteInfo);	
				break;
			default:
				return;
		}
	});
};

const inquirerPrompt = (question, query, nextStep) => {
	inquirer.prompt(question).then((results) => nextStep(query, results));
};

const displayTable = (displayResults) => {
	console.table(displayResults);
	mainMenuPromote();
}
const viewInfo = (query) => {
	dbCon.query(query, (error, result) => error ? console.error(error) : displayTable(result))
}
const deleteInfo = (query, parameters) => {
	dbCon.query(query, parameters ,(error, result) => error ? console.error(error) : displayTable(result))
}
const addInfo = (query, parameters) => {
	dbCon.query(query, parameters ,(error, result) => error ? console.error(error) : displayTable(result))
}

// const viewManagerByEmployee = () => {};
const addDepartmentPromote = () => {

};
const addRolePromote = () => {};
const addEmployeePromote = () => {};
const updateManagerPromote = () => {};
const updateRolePromote = () => {};

mainMenuPromote();
