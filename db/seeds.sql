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

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  
        (1, 'Hikari', 'Noa', 1, null),
        (2, 'Yuka', 'Sakazaki', 2, null),
        (3, 'Shoko', 'Nakajima', 3, null),
        (4, 'Minoru', 'Suzuki', 4, null),
        (5, 'Maki Itoh', 'Suruga', 5, null), 
        (6, 'Hyper', 'Misao', 6, null), 
        (7, 'Sayuri', 'Namba', 7, null), 
        (8, 'Pom', 'Harajuku', 8, null); 
