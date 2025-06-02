\# Helpdesk Ticketing System

\#Overview

This is a full-stack Helpdesk Ticketing System developed as part of the Web Application Development and Security (COMP6703001) final project. The application enables role-based ticket submission, tracking, and resolution for customers, staff, and admins. The system follows secure web development practices and includes complete API documentation via Swagger (OpenAPI 3.0).

\--  
\# Features

\- \*User Authentication\*\* with sessions and cookies  
\- \*Role-based Access Control\*\* (Customer, Staff, Admin)  
\- \*Ticket Management\*\* (CRUD operations with replies)  
\-  \*Auto-assignment of Tickets\*\* to staff  
\- \*Search & Filter Tickets\*\*  
\- \*Mockup-based UI\*\* designed in Figma  
\-  \*Deployment with CI/CD Pipeline\*\*  
\- \*API Documentation via Swagger\*\*

\---

\#Technologies Used

\- \*\*Frontend\*\*: React.js, HTML, CSS, JavaScript  
\- \*\*Backend\*\*: Node.js, Express.js  
\- \*\*Database\*\*: MongoDB with Mongoose  
\- \*\*Authentication\*\*: Sessions, Cookies, AuthContext  
\- \*\*Other Tools\*\*: Docker, Swagger (OpenAPI), Figma, GitHub, Jira

\---

\#Installation

1. Clone the repository:
git clone https://github.com/normalplayar/OceanColor.git
cd OceanColor

2. Install dependencies:
npm install  
cd client  
npm install

3. Create a `.env` file in the root:
PORT=5000  
MONGO\_URI=your\_mongodb\_uri  
SESSION\_SECRET=your\_secret

4. Start the development environment:

npm run server   \# backend
cd client && npm start   \# frontend

**API Documentation (Swagger)**
We use Swagger (OpenAPI 3.0) to document and test all API endpoints.
### 🔗 How to Access
* Open Swagger Editor  
* Import the `swagger.json` file located in the root of this repository  
* Interact with the API using the interface

### **Example Endpoints:**

| Endpoint | Method | Description |
| ----- | ----- | ----- |
| `/auth/login` | POST | User login |
| `/auth/signup` | POST | User registration |
| `/tickets` | GET | Retrieve user’s ticket list |
| `/tickets` | POST | Submit new support ticket |
| `/tickets/{id}` | GET | View a specific ticket |
| `/tickets/{id}` | PUT | Update a specific ticket |

## **Project Structure**

/client          → React front-end  
/server          → Node.js backend  
/models          → MongoDB models (User, Ticket, Reply)  
/routes          → API route handlers  
/context         → React AuthContext for auth logic  
/swagger.json    → API documentation file

## **Deployment**

* The system is containerized with Docker  
* CI/CD pipeline ensures automatic deployment on push  
* Sessions and environment variables are securely managed on the server  
* Hosted using a cloud service (specify if known)

## **Lessons Learned**

* Gained experience with advanced MongoDB modeling, including subdocuments and normalization  
* Built a modular React front-end and integrated it with a RESTful Express API  
* Implemented secure, session-based authentication and authorization  
* Learned to configure and troubleshoot Docker and CI/CD pipelines  
* Used Swagger for live API documentation and real-time endpoint testing  
* Understood the importance of clean, scalable project structure and collaboration

