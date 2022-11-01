/* Creates the database and drops that version if it is there*/
DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;
USE employee_tracker_db;

/* Creates department table*/
CREATE TABLE department (
  id INT PRIMARY KEY AUTO_INCREMENT  NOT NULL,
  name VARCHAR(30) NOT NULL
);

/* Creates role table*/
CREATE TABLE employee_role (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(12, 2) NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id)
  ON DELETE CASCADE
);

/* Creates employee table*/
CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT DEFAULT NULL,
  FOREIGN Key (role_id) REFERENCES employee_role(id) ON DELETE SET NULL,
  FOREIGN KEY (manager_id) REFERENCES employee(id)
  ON DELETE SET NULL
);