<img width="694" height="296" alt="image" src="https://github.com/user-attachments/assets/6c814d47-b5e9-45e6-a856-f845f52542fd" />

# 🔐 Full Stack Login Application

A simple **Full Stack Login Application** built using **React.js, Spring Boot, and MySQL**.

The user enters a username and password in the React frontend. The credentials are sent to the Spring Boot backend, which checks the user details in the MySQL database and returns **"Login Successful"** or **"Invalid Username or Password"**.

---

## 🚀 Technologies Used

### Frontend

* React.js
* JavaScript
* HTML
* CSS

### Backend

* Java
* Spring Boot
* Spring Data JPA
* REST API
* Maven

### Database

* MySQL

### Tools

* Eclipse
* VS Code
* Postman
* Git & GitHub

---

## ✨ Features

* Simple login form
* Username and password input
* React frontend
* Spring Boot REST API
* MySQL database
* Spring Data JPA
* Controller-Service-Repository architecture
* CORS configuration
* Login success message
* Invalid username/password message

---

## 🏗️ Project Architecture

```text
React Frontend
localhost:5173
       |
       | POST /login
       ↓
Spring Boot Backend
localhost:8080
       |
       ↓
Controller
       |
       ↓
Service
       |
       ↓
Repository
       |
       ↓
MySQL Database
localhost:3306
```

---

# 📂 Project Structure

## Backend

```text
Backend
│
├── src/main/java/com/rohan/login
│
├── controller
│   └── LoginController.java
│
├── service
│   └── UserService.java
│
├── repository
│   └── UserRepository.java
│
├── entity
│   └── User.java
│
└── LoginApplication.java
```

## Frontend

```text
Frontend
│
├── src
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── vite.config.js
```

---

# 🗄️ MySQL Database Setup

Create the database:

```sql
CREATE DATABASE login_db;
```

Select the database:

```sql
USE login_db;
```

Create the `users` table:

```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL
);
```

Insert a test user:

```sql
INSERT INTO users (username, password)
VALUES ('rohan', '12345');
```

Check the data:

```sql
SELECT * FROM users;
```

Example:

```text
+----+----------+----------+
| id | username | password |
+----+----------+----------+
|  1 | rohan    | 12345    |
+----+----------+----------+
```

---

# ⚙️ Spring Boot Backend Setup

## 1. Configure MySQL

Open:

```text
src/main/resources/application.properties
```

Add:

```properties
spring.application.name=LoginProject

spring.datasource.url=jdbc:mysql://localhost:3306/login_db
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

server.port=8080
```

Replace:

```text
YOUR_MYSQL_PASSWORD
```

with your MySQL pass

