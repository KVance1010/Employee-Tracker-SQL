/* Creates the database and drops that version if it is there*/
DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;
USE employee_tracker_db;

/* Creates department table*/
CREATE TABLE department (
  id INT PRIMARY KEY AUTO_INCREMENT  NOT NULL,
  department_name VARCHAR(30) NOT NULL
);

/* Creates role table*/
CREATE TABLE employee_role (
  id INT AUTO_INCREMENT PRIMARY KEY,
  role_title VARCHAR(30) NOT NULL,
  role_salary DECIMAL(10, 2) NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id)
);

/* Creates employee table*/
CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  employee_first_name VARCHAR(30) NOT NULL,
  employee_last_name VARCHAR(30) NOT NULL,
  hire_date DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  role_id INT,
  manager_id INT DEFAULT NULL,
  FOREIGN Key (role_id) REFERENCES employee_role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
  ON DELETE SET NULL
);
