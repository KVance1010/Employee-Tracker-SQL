const mainMenu = [
	{
		name: 'selection',
		message: 'Add a new employee?',
		type: 'list',
		choices: [
			'view all departments',
			'view all roles',
			'view all employees',
            // "view employee's manager",
			'add a department',
			'add a role',
			'add an employee',
			"update an employee's role",
			"update an employee's manager",
			'delete a department',
			'delete a role',
			'delete an employee',
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
		message: 'What is the department id for this role?',
		type: 'input',
	},
];
const addEmployee = [
	{
		name: 'employee_first_name',
		message: 'What is the employee\'s first name?',
		type: 'input',
	},
	{
		name: 'employee_last_name',
		message: 'What is the employee\'s first name?',
		type: 'input',
	},
	{
		name: 'role_id',
		message: 'what is the id of the role you would like to add this employee to?',
		type: 'input',
	},
	{
		name: 'manager_id',
		message: 'What is this employee managers ID?',
		type: 'input',
	},
];
const updateRole =[
    {
		name: 'id',
		message: 'What is the employee\'s id?',
		type: 'input',
	},
	{
		name: 'role',
		message: 'What is the employee\'s new role?',
		type: 'input',
	},
];
const updateManager = [
    {
		name: 'id',
		message: 'What is the employee\'s ID?',
		type: 'input',
	},
	{
		name: 'manager_id',
		message: 'What is the employee\'s new manager\'s ID?',
		type: 'input',
	},
];
const deleteDepartment = [
    {
		name: 'id',
		message: 'What is the ID of the department you would like to delete?',
		type: 'input',
	}
];
const deleteRole = [
    {
		name: 'id',
		message: 'What is the ID of the role you would like to delete?',
		type: 'input',
	}
];
const deleteEmployee = [
    {
		name: 'id',
		message: 'What is the ID of the employee you would like to delete?',
		type: 'input',
	}
];

module.exports = {mainMenu, deleteDepartment, deleteRole, deleteEmployee, addDepartment, addRole, addEmployee, updateManager, updateRole};