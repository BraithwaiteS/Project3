

use tat;
INSERT INTO users (userName, email, phone, createdAt, updatedAt)
VALUES ("Mr. Kim", "kim@aol.com", "202-333-3333", null, null);
INSERT INTO users (userName, email, phone, createdAt, updatedAt)
VALUES ("Mr. Tim", "tim@aol.com", "202-555-5555", null, null);
INSERT INTO users (userName, email, phone, createdAt, updatedAt)
VALUES ("Mr. Jim", "jim@aol.com", "202-444-4444", null, null);

use tat;
INSERT INTO tasks (taskName, due_date, completed, createdAt, updatedAt, UserId)
VALUES ("Wash Car", '2019-04-12', '2019-04-23', null, null, 1);
INSERT INTO tasks (taskName, due_date, completed, createdAt, updatedAt, UserId)
VALUES ("Wash Pet", '2019-04-13', '2019-04-24', null, null, 3);
INSERT INTO tasks (taskName, due_date, completed, createdAt, updatedAt, UserId)
VALUES ("Wash House", '2019-04-14', '2019-04-25', null, null, 2);