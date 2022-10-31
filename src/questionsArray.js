const mainMenu = [
	{
		name: 'selection',
		message: 'Main menu: selection an option',
		type: 'list',
		choices: [
			'view all departments',
			'view all roles',
			'view all employees',
			'add a department',
			'add a role',
			// 'delete a department',
			// 'delete a role',
			// 'delete an employee',
			// "view employee's by manager",
			'add an employee',
			// 'view employees by department',
			"update an employee's role",
			// "update an employee's manager",
			'quit',
		],
	},
];

const addDepartment = [
	{
		name: 'department_name',
		message: 'What is new department name?',
		type: 'input',
	},
];

const addRole = [
	{
		name: 'role_title',
		message: 'What is new role you would like to add?',
		type: 'input',
	},
	{
		name: 'role_salary',
		message: 'what is the salary of this role?',
		type: 'input',
	},
	{
		name: 'department_id',
		message: 'What is the department name for this role?',
		type: 'input',
	},
];
const addEmployee = [
	{
		name: 'employee_first_name',
		message: "What is the employee's first name?",
		type: 'input',
	},
	{
		name: 'employee_last_name',
		message: "What is the employee's last name?",
		type: 'input',
	},
	{
		name: 'role_id',
		message: 'what is the name of the role this employee will be doing?',
		type: 'input',
	},
	{
		name: 'manager_first',
		message: 'What is the first name of the manger for this employee?',
		type: 'input',
	},
	{
		name: 'manager_last',
		message: 'What is the last name of the manger for this employee?',
		type: 'input',
	},
];
const updateRole = [
	{
		name: 'employee',
		message: "Select an employee to update?",
		type: 'list',
		choices: []
	},
	{
		name: 'role',
		message: "What is the employee's new role?",
		type: 'list',
		choices: []
	},
];
const updateManager = [
	{
		name: 'id',
		message: "What is the employee's ID?",
		type: 'input',
	},
	{
		name: 'manager_id',
		message: "What is the employee's new manager's ID?",
		type: 'input',
	},
];
const deleteDepartment = [
	{
		name: 'id',
		message: 'What is the ID of the department you would like to delete?',
		type: 'input',
	},
];
const deleteRole = [
	{
		name: 'id',
		message: 'What is the ID of the role you would like to delete?',
		type: 'input',
	},
];
const deleteEmployee = [
	{
		name: 'id',
		message: 'What is the ID of the employee you would like to delete?',
		type: 'input',
	},
];

module.exports = {
	mainMenu,
	deleteDepartment,
	deleteRole,
	deleteEmployee,
	addDepartment,
	addRole,
	addEmployee,
	updateManager,
	updateRole,
};

