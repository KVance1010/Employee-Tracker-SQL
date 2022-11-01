const allQueries = {
	addDepartmentQuery: 'INSERT INTO department (name) VALUE (?)',
	addRoleQuery:
		'INSERT INTO employee_role (title, salary, department_id)Value(?, ?,(SELECT d.id FROM department AS d WHERE d.name = ?))',
	addEmployeeQuery:
		'INSERT INTO employee (first_name, last_name, role_id, manager_id) Value(?, ?, (SELECT r.id FROM employee_role AS r WHERE r.title = ?), (SELECT m.id FROM employee AS m WHERE m.first_name = ? AND m.last_name = ? ))',
	deleteDepartmentQuery: ['SELECT * FROM department','DELETE FROM department WHERE id = ?'],
	deleteRoleQuery: ['SELECT title AS name, id FROM employee_role','DELETE FROM employee_role WHERE id = ?'],
	deleteEmployeeQuery: ['SELECT CONCAT(first_name, " ", last_name) AS name, id FROM employee','DELETE FROM employee WHERE id = ?'],
	updateManagerQuery: [
		'SELECT id, CONCAT(first_name, " ", last_name) AS name FROM employee',
		'SELECT DISTINCT CONCAT(m.first_name, " ", m.last_name) AS name, e.manager_id AS id from employee AS e JOIN employee AS m ON e.manager_id = m.id',
		'UPDATE employee SET manager_id = ? WHERE id = ?',
	],
	updateRoleQuery: [
		'SELECT id, CONCAT(first_name, " ", last_name) AS name FROM employee',
		'SELECT id, title AS name FROM employee_role',
		'UPDATE employee SET role_id = ? WHERE id = ?',
	],
	viewAllDepartmentsQuery:
		'SELECT * FROM department ORDER BY department.id ASC',
	viewAllEmployeesByDepartment: [
		'SELECT * FROM department',
		'SELECT d.name AS department, CONCAT(e.first_name , " " , e.last_name) AS name, r.title, r.salary FROM employee AS e JOIN employee_role AS r ON e.role_id = r.id JOIN department AS d WHERE d.id= ?',
	],
	viewAllEmployeesQuery:
		'SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee AS e JOIN employee_role AS r on e.role_id = r.id JOIN department AS d on r.department_id = d.id LEFT JOIN employee AS manager ON manager.id = e.manager_id ORDER BY e.id ASC',
	viewAllRolesQuery:
		'SELECT r.id, r.title, d.name as department, r.salary FROM employee_role AS r JOIN department AS d ON r.department_id = d.id ORDER BY r.id ASC',
	viewDepartmentPayrollQuery:'SELECT d.name as department, SUM(r.salary) AS payroll_total FROM department AS d JOIN employee_role AS r ON r.department_id = d.id  GROUP BY department',
	viewEmployeesByManagerQuery: [
		'SELECT DISTINCT CONCAT(m.first_name, " ", m.last_name) AS name, e.manager_id AS id from employee AS e JOIN employee AS m ON e.manager_id = m.id',
		'SELECT CONCAT(e.first_name , " " , e.last_name) AS name, r.title, r.salary FROM employee AS e JOIN employee_role AS r Where e.manager_id = ?',
	],
};

module.exports = allQueries;
