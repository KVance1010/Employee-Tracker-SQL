const mainMenu = [
	{
		name: 'selection',
		message: 'Main menu: selection an option',
		type: 'list',
		choices: [
			'add a department',
			'add an employee',
			'add a role',
			// 'delete a department',
			// 'delete a role',
			// 'delete an employee',
			'update an employee\'s role',
			'update an employee\'s manager',
			'view all departments',
			'view all roles',
			'view all employees',
			// 'view department total utilized budget'
			'view employees by department',
			'view employee\'s by manager',
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

const deleteDepartment = [
	{
		name: 'id',
		message: 'What is the ID of the department you would like to delete?',
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

const deleteRole = [
	{
		name: 'id',
		message: 'What is the ID of the role you would like to delete?',
		type: 'input',
	},
];


const showEmployeeByDepartment = [{
	name:'name',
	message: 'Show employee by department',
	type: 'list',
	choices: []
}];

const showEmployeeByManager = [{
	name:'name',
	message: 'Show employee by manager',
	type: 'list',
	choices: []
}];

const updateManager = [
	{
		name: 'employee',
		message: 'Select an employee to update?',
		type: 'list',
		choices: [],
	},
	{
		name: 'name',
		message: "Select an the employee's new manager?",
		type: 'list',
		choices: [],
	},
];

const updateRole = [
	{
		name: 'employee',
		message: 'Select an employee to update?',
		type: 'list',
		choices: [],
	},
	{
		name: 'name',
		message: "What is the employee's new role?",
		type: 'list',
		choices: [],
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
	showEmployeeByManager,
	showEmployeeByDepartment
};
