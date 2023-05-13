The user.model schema
The schema defines the properties of a user, including:

* firstName: The first name of the user (string, required).
* lastName: The last name of the user (string, required).
* email: The email of the user (string, required, unique).
* password: The password of the user (string, required).
* faculty: The faculty of the user (string, required).
* department: The department of the user (string, required).
* role: The role of the user, which can be one of three possible values: 'admin', 'lecturer', or 'student' (string, required).
* courses: An array of ObjectIds referencing courses, required only if the user's role is 'student'.
* assignedCourses: An array of ObjectIds referencing courses, required only if the user's role is 'lecturer'.
* assignedTitle: The assigned title of the user, required only if the user's role is 'lecturer'.
* createdAt: The date when the user was created (Date, default to the current date).

The schema also sets up some validation logic for the courses, assignedCourses, and assignedTitle fields, ensuring that they are required only if the user's role matches the appropriate value. The schema is exported as a Mongoose model named 'User'.