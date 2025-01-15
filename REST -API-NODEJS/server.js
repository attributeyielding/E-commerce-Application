// E-commerce REST API Implementation with Full Swagger Documentation using Node.js and Express

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Swagger Configuration
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'E-commerce API',
            version: '1.0.0',
            description: 'E-commerce API for managing users, products, orders, and more',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Local server'
            }
        ],
    },
    apis: ['./index.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Mock Database (Replace with actual DB queries)
const db = {
    users: [],
    categories: [],
    products: [],
    orders: [],
    orderDetails: [],
    reviews: [],
    cart: [],
    payments: [],
    wishlist: []
};

// Authentication Middleware
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ error: 'Access Denied' });
    
    jwt.verify(token, 'SECRET_KEY', (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid Token' });
        req.user = user;
        next();
    });
};

// Routes

/** 
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Email already exists
 */
app.post('/auth/register', async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    const existingUser = db.users.find(u => u.email === email);
    if (existingUser) return res.status(400).json({ error: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
        user_id: uuidv4(),
        first_name,
        last_name,
        email,
        password_hash: hashedPassword,
        created_at: new Date()
    };
    db.users.push(newUser);
    res.status(201).json({ message: 'User registered successfully' });
});

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Returns a token
 *       400:
 *         description: Invalid email or password
 */
app.post('/auth/login', async (req, res) => {
    const { email, password } = req.body;
    const user = db.users.find(u => u.email === email);
    if (!user) return res.status(400).json({ error: 'Invalid email or password' });

    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (!validPassword) return res.status(400).json({ error: 'Invalid email or password' });

    const token = jwt.sign({ user_id: user.user_id, email: user.email }, 'SECRET_KEY', { expiresIn: '1h' });
    res.json({ token });
});

/**
 * @swagger
 * /users/me:
 *   get:
 *     summary: Get current user profile
 *     responses:
 *       200:
 *         description: Returns the user profile
 *       401:
 *         description: Unauthorized
 */
app.get('/users/me', authenticateToken, (req, res) => {
    const user = db.users.find(u => u.user_id === req.user.user_id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
});

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     responses:
 *       200:
 *         description: List of products
 */
app.get('/products', (req, res) => {
    res.json(db.products);
});

/**
 * @swagger
 * /cart:
 *   get:
 *     summary: Get user cart
 *     responses:
 *       200:
 *         description: List of cart items
 *       401:
 *         description: Unauthorized
 */
app.get('/cart', authenticateToken, (req, res) => {
    const userCart = db.cart.filter(c => c.user_id === req.user.user_id);
    res.json(userCart);
});

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get user orders
 *     responses:
 *       200:
 *         description: List of orders
 *       401:
 *         description: Unauthorized
 */
app.get('/orders', authenticateToken, (req, res) => {
    const userOrders = db.orders.filter(order => order.user_id === req.user.user_id);
    res.json(userOrders);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
