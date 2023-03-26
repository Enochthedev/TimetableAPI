# TimetableAPI
This is the Timetable API created with Node.js and Express. It is a RESTful API that allows you to get the timetable of a specific course at any university when connected with any database provider. The database is not included in this project. At the moment the API works only with relational databases, so you need to have a relational database to use this API. The API is still in development and more features will be added in the future.
Integration right now is only with PostgreSQL as it satifies the requirements of the project. 
others that could work with this API are 
- MySQL:It's easy to use and has good performance, but it may not offer some advanced features available in PostgreSQL, such as support for geospatial data types through the PostGIS extension.
---------------------
- MariaDB:A community-developed fork of MySQL, designed to be a drop-in replacement for MySQL with additional features and improved performance. It is open-source and compatible with MySQL, which makes it easy to migrate between the two.
---------------------
- Microsoft SQL Server: A commercial relational database management system developed by Microsoft. It has robust features and good performance, but it comes with licensing costs and may not be as platform-agnostic as PostgreSQL, MySQL, or MariaDB.
---------------------
- Oracle Database: A powerful and feature-rich commercial relational database management system. It is suitable for large-scale, enterprise applications but comes with high licensing costs and complexity.

# Installation
To install the API, you need to have Node.js installed on your computer. You can download it from [here](https://nodejs.org/en/download/).

- Clone the repository to your local machine using the following command:
```
git clone https://github.com/Enochthedev/TimetableAPI.git
```
- Navigate to the directory where you cloned the repository and run the following command:
```
npm install
```
- After the installation is complete, run the following command to start the server:
```
npm start
```
- The server will start on port 3000. You can change the port in the `app.js` file.

# connecting to a database(POSTGRESQL)
- create a .env file in the root directory of the project
- add the following to the .env file (local environment variables)
```
DB_HOST=your database host
DB_USER=your database username
DB_PASSWORD=your database password
DB_NAME=your database name
```
- during deployment, you can add the environment variables to your hosting platform


# Usage




# File Structure and Description
The file structure of the project is as follows:


# Contributing
If you want to contribute to this project, you can fork the repository and make a pull request. 
Follow these steps:

- Fork the project on GitHub.
- Clone your forked repository to your local machine.
- Create a new branch for your changes: ``` git checkout -b my-new-branch```
- Make your changes and commit them: ```git commit -am 'Add some feature'```
- Push the changes to your forked repository: ```git push origin my-new-branch```
- Submit a pull request to the original repository.

You can also open an issue if you find a bug or have a suggestion.

# License


# Credits



# Contact
If you have any questions, you can contact me on [Twitter](https://twitter.com/Enochthedev) or [LinkedIn](https://www.linkedin.com/in/omosebi-enoch-a-b8a8b817b/).

# Disclaimer
This project is for educational purposes only. I am not responsible for any misuse of this project.
