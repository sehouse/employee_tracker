INSERT INTO department (name)
VALUES ('Intern'), ('Engineering'), ('Management'), ('Legal'),('Human Resources');

INSERT INTO role (title, salary, department_id)
VALUES ('Intern', 30000, 1),
        ('Lead Engineer', 150000, 2),
        ('Software Engineer', 120000, 2),
        ('Executive VP', 1250000, 3),
        ('Manager', 150000, 3),
        ('Lawyer', 190000, 4),
        ('Human Resources Head', 190000, 5),
        ('Human Resource Personnel', 65000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  
        ('Hikari', 'Noa', 1, null),
        ('Yuka', 'Sakazaki', 2, null),
        ('Shoko', 'Nakajima', 3, null),
        ('Minoru', 'Suzuki', 4, 4698),
        ('Maki Itoh', 'Suruga', 5, null), 
        ('Hyper', 'Misao', 6, null); 
        ('Sayuri', 'Namba', 7, null), 
        ('Pom', 'Harajuku', 8, null); 
