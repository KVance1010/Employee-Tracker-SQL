const mainMenu = [
	{
		name: 'selection',
		message: 'Main menu: selection an option',
		type: 'list',
		choices: [
			'add a department',
			'add an employee',
			'add a role',
			'delete a department',
			'delete a role',
			'delete an employee',
			'update an employee\'s role',
			'update an employee\'s manager',
			'view all departments',
			'view all roles',
			'view all employees',
			'view all departments total payroll',
			'view employees by department',
			'view employee\'s by manager',
			'view totals by department',
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
		name: 'title',
		message: 'What is new role you would like to add?',
		type: 'input',
	},
	{
		name: 'salary',
		message: 'what is the salary of this role?',
		type: 'input',
	},
	{
		name:'name',
		message: 'select a department for this role',
		type: 'list',
		choices: []
	}
];

const deleteDepartment = [
	{
		name:'name',
		message: 'select a department to delete',
		type: 'list',
		choices: []
	},
];

const deleteEmployee = [
	{
		name:'name',
		message: 'select an employee to delete',
		type: 'list',
		choices: []
	},
];

const deleteRole = [
	{
		name:'name',
		message: 'select a role to delete',
		type: 'list',
		choices: []
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

const viewTotalByD = [{
	name:'name',
	message: 'Select the department to view payroll totals',
	type: 'list',
	choices: []
}];


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
	showEmployeeByDepartment,
	viewTotalByD
};
