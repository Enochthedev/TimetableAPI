# TimetableAPI
This is the Timetable API created with Node.js and Express. It is a RESTful API that allows you to get the timetable of a specific course at any university when connected with any database provider. This project is built on a hybrid database that uses both MariaDB and MongoDB.

# Databases

* MariaDB: A community-developed fork of MySQL, designed to be a drop-in replacement for MySQL with additional features and improved performance. It is open-source and compatible with MySQL, which makes it easy to migrate between the two.
* MongoDB: A NoSQL document-based database that is highly scalable and flexible. It is a popular choice for handling large amounts of unstructured data

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

# connecting to a database
connecting to a relational database (such as MariaDB or MySQL), assuming you already have an .env file in the root directory of the project and add the following variables:
```
DB_HOST=your database host
DB_USER=your database username
DB_PASSWORD=your database password
DB_NAME=your database name
```

To connect to a MongoDB database, create a .env file in the root directory of the project and add the following variable:
```

MONGODB_URI=your mongodb uri
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
This project is licensed under the [MIT License](https://opensource.org/license/mit/).

# Credits



# Contact
If you have any questions, you can contact me on [Twitter](https://twitter.com/Enochthedev) or [LinkedIn](https://www.linkedin.com/in/omosebi-enoch-a-b8a8b817b/).

# Disclaimer
This project is for educational purposes only. I am not responsible for any misuse of this project.
