import swaggerJsDoc from "swagger-jsdoc";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     sessionAuth:
 *       type: apiKey
 *       in: cookie
 *       name: connect.sid
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *       properties:
 *         _id:
 *           type: string
 *           description: Unique identifier for the user
 *         username:
 *           type: string
 *           description: Username of the user
 *         email:
 *           type: string
 *           description: Email address of the user
 *         phone:
 *           type: string
 *           description: Phone number of the user
 *         password:
 *           type: string
 *           description: Password of the user
 *         level:
 *           type: integer
 *           description: User access level (1-3)
 *         closed:
 *           type: boolean
 *           description: Whether the user account is closed
 *         progress:
 *           type: integer
 *           description: User's progress
 *       example:
 *         _id: "507f1f77bcf86cd799439011"
 *         username: "john_doe"
 *         email: "john@example.com"
 *         phone: "1234567890"
 *         password: "hashedPassword123"
 *         level: 1
 *         closed: false
 *         progress: 0
 *     Ticket:
 *       type: object
 *       required:
 *         - title
 *         - description
 *       properties:
 *         _id:
 *           type: string
 *           description: Unique identifier for the ticket
 *         creator:
 *           type: string
 *           description: ID of the user who created the ticket
 *         title:
 *           type: string
 *           description: Title of the ticket
 *         description:
 *           type: string
 *           description: Description of the ticket
 *         status:
 *           type: string
 *           description: Current status of the ticket
 *         responses:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               creator:
 *                 type: string
 *                 description: ID of the user who created the response
 *               message:
 *                 type: string
 *                 description: Response message
 *               timestamp:
 *                 type: string
 *                 format: date-time
 *                 description: Time when the response was created
 *         assign:
 *           type: string
 *           description: ID of the user assigned to the ticket
 *       example:
 *         _id: "507f1f77bcf86cd799439012"
 *         creator: "507f1f77bcf86cd799439011"
 *         title: "Login Issue"
 *         description: "Cannot login to the system"
 *         status: "open"
 *         responses: []
 *         assign: null
 * 
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Authentication endpoints
 *   - name: Users
 *     description: User management endpoints
 *   - name: Tickets
 *     description: Support ticket endpoints
 * 
 * @swagger
 * /auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Login user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: User does not exist
 * 
 * @swagger
 * /auth/logout:
 *   post:
 *     tags: [Auth]
 *     summary: Logout user
 *     responses:
 *       200:
 *         description: Logout successful
 *       500:
 *         description: Server error
 * 
 * @swagger
 * /user:
 *   get:
 *     tags: [Users]
 *     summary: Get all users
 *     security:
 *       - sessionAuth: []
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *   post:
 *     tags: [Users]
 *     summary: Create new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 * 
 * @swagger
 * /user/{id}:
 *   get:
 *     tags: [Users]
 *     summary: Get user by ID
 *     security:
 *       - sessionAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *   put:
 *     tags: [Users]
 *     summary: Update user
 *     security:
 *       - sessionAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User updated successfully
 *   delete:
 *     tags: [Users]
 *     summary: Delete user
 *     security:
 *       - sessionAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully
 * 
 * @swagger
 * /ticket:
 *   get:
 *     tags: [Tickets]
 *     summary: Get all tickets (filtered by user level)
 *     security:
 *       - sessionAuth: []
 *     responses:
 *       200:
 *         description: List of tickets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ticket'
 *   post:
 *     tags: [Tickets]
 *     summary: Create new ticket
 *     security:
 *       - sessionAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Ticket created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ticket'
 * 
 * @swagger
 * /ticket/{id}:
 *   get:
 *     tags: [Tickets]
 *     summary: Get ticket by ID
 *     security:
 *       - sessionAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ticket details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ticket'
 *   put:
 *     tags: [Tickets]
 *     summary: Update ticket or add response
 *     security:
 *       - sessionAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             oneOf:
 *               - type: object
 *                 required:
 *                   - title
 *                   - description
 *                 properties:
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *               - type: object
 *                 required:
 *                   - status
 *                   - response
 *                 properties:
 *                   status:
 *                     type: string
 *                   response:
 *                     type: object
 *                     properties:
 *                       message:
 *                         type: string
 *     responses:
 *       200:
 *         description: Ticket updated successfully
 *       403:
 *         description: Not authorized to update ticket
 *   delete:
 *     tags: [Tickets]
 *     summary: Delete ticket
 *     security:
 *       - sessionAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ticket deleted successfully
 */

const swaggerSpec = swaggerJsDoc({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "OceanColor Support System API",
            version: "1.0.0",
            description: "API for OceanColor Support System, including user authentication, user management, and support ticket handling.",
        },
        servers: [
            {
                url: 'http://localhost:5000/api',
                description: 'Development server',
            }
        ],
        security: [
            {
                sessionAuth: []
            }
        ]
    },
    apis: [
        path.join(__dirname, '..', 'routes', '*.js'),
        path.join(__dirname, 'swagger.js')
    ],
});

export default swaggerSpec;


