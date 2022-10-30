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
		switch ({ selection }) {
			case 'view all departments':
				viewAllDepartments();
				break;
			case 'view all roles':
				viewAllRoles();
				break;
			case 'view all employees':
				viewAllEmployees();
				break;
			//case  "view employee's manager":
			//   viewManagerByEmployee();
			//   break;
			case 'add a department':
				deleteDepartmentPromote();
				break;
			case 'add a role':
				deleteRolePromote();
				break;
			case 'add an employee':
				deleteEmployeePromote();
				break;
			case "update an employee's role":
				addDepartmentPromote();
				break;
			case "update an employee's manager":
				addRolePromote();
				break;
			case 'delete a department':
				addEmployeePromote();
				break;
			case 'delete a role':
				updateManagerPromote();
				break;
			case 'delete an employee':
				updateRolePromote();
				break;
			default:
			return;
		}
	});
};

const viewAllDepartments = () => {
	dbCon.query('SELECT * FROM department ORDER BY department.id ASC', err => err ? console.log(err):console.table(result));
};

const viewAllRoles = () => {
	dbCon.query('SELECT r.id, r.title, d.name, r.salary AS salary, AS department FROM employee_role AS r JOIN department AS d ON r.department_id = d.id ORDER BY r.id ASC', err => err ? console.log(err) : console.table(result));
};

const viewAllEmployees = () => {
	dbCon.query('SELECT e.id, e.first_name, e.last_name, r.title, e.hire_date, d.name AS department, r.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee AS e JOIN employee_role AS r on e.role_id = r.id JOIN department AS d on r.department_id = d.id LEFT JOIN employee AS manager ON manager.id = e.manager_id ORDER BY e.id ASC') , err => err ? console.log(err) : console.table(result);
};

// const viewManagerByEmployee = () => {};

const deleteDepartmentPromote = () => {
	const deleteRow =
	dbCon.query("DELETE FROM  WHERE id = ?", deletedRow, (err, result) => err ? console.log(err):console.log(result));
}	

const deleteRolePromote = () => {
	
};
const deleteEmployeePromote = () => {

};
const addDepartmentPromote = () => {

};
const addRolePromote = () => {

};
const addEmployeePromote = () => {

};
const updateManagerPromote = () => {

};
const updateRolePromote = () => {

};


mainMenuPromote();