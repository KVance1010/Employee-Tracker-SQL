INSERT INTO department (name)
VALUES ("Human Resources"),
       ("Accounting "),
       ("Legal"),
       ("Sales"),
       ("Development");


INSERT INTO employee_role (title, salary, department_id)
VALUES ("HR Manager", 80000.00, 1),
       ("HR Team Member", 60000.00, 1),
       ("Accounting Manager", 140000.00, 2),
       ("Accounting Team Member", 80000, 2),
       ("Legal Manager", 250000.00, 3),
       ("Legal Team Manager", 150000.00, 3),
       ("Sales Manager", 70000.00, 4),
       ("Sales Team Member", 50000.00, 4),
       ("Development Manager", 150000.00, 5),
       ("Development Team Member", 80000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Robert", "Smith", 1, NULL),
       ("Stevie", "Nicks", 3, NULL),   
       ("James", "Mercer", 5, NULL),
       ("Freddie", "Mercury", 7, NULL),
       ("Rob", "Zombie", 9, NULL),
       ("Annie", "Lennox", 2, 1),
       ("Robert", "Plant", 2, 1),
       ("Rob", "Thomas", 2, 1),
       ("Marilyn", "Manson", 2, 1),
       ("Joe", "Newman", 4, 3),
       ("Vance", "Joy", 4, 3),
       ("Anthony", "Kiedis", 4, 3),
       ("Dave", "Gahan", 4, 3),
       ("Marcus", "Johnstone", 6, 5),
       ("Al", "Yankovic", 6, 5),
       ("Kylie", "Minogue", 6, 5),
       ("John", "Lennon", 8, 7),
       ("Eric", "Clapton", 8, 7),
       ("Marvin", "Gaye", 8, 7),
       ("Otis", "Redding", 8, 7),
       ("Ozzy", "Osbourne", 10, 9),
       ("Phil", "Collins", 10, 9),
       ("Steven", "Morrissey", 10, 9),
       ("Paul", "Hewson", 10, 9),
       ("Bon", "Jovi", 10, 9);
       
