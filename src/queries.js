const allQueries ={
viewAllDepartmentsQuery : 'SELECT * FROM department ORDER BY department.id ASC',
viewAllRolesQuery : 'SELECT r.id, r.title, d.name as department, r.salary FROM employee_role AS r JOIN department AS d ON r.department_id = d.id ORDER BY r.id ASC',
viewAllEmployeesQuery : 'SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee AS e JOIN employee_role AS r on e.role_id = r.id JOIN department AS d on r.department_id = d.id LEFT JOIN employee AS manager ON manager.id = e.manager_id ORDER BY e.id ASC',
deleteDepartmentQuery : '',
deleteRoleQuery : '',
deleteEmployeeQuery : '',
addDepartmentQuery : 'INSERT INTO department (name) Value(?)',
addRoleQuery : '',
addEmployeeQuery : '',
updateManagerQuery : '',
updateRoleQuery : '',
}

module.exports = allQueries;