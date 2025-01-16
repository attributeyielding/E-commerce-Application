// Import required modules
const express = require('express');
const mysql = require('mysql2');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const bodyParser = require('body-parser');

// Create an Express app
const app = express();
app.use(bodyParser.json());

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'your_database_name',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'E-Commerce API',
      version: '1.0.0',
      description: 'API for managing e-commerce data',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./app.js'], // Path to the API file
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes for Users Table
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: List of users
 */
app.get('/users', (req, res) => {
  db.query('SELECT * FROM Users WHERE deleted_at IS NULL', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User details
 */
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM Users WHERE user_id = ? AND deleted_at IS NULL', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0] || {});
  });
});

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
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
 *               password_hash:
 *                 type: string
 *               phone_number:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created
 */
app.post('/users', (req, res) => {
  const { first_name, last_name, email, password_hash, phone_number, address } = req.body;
  const user_id = require('crypto').randomUUID();
  db.query(
    'INSERT INTO Users (user_id, first_name, last_name, email, password_hash, phone_number, address) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [user_id, first_name, last_name, email, password_hash, phone_number, address],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'User created', user_id });
    }
  );
});

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update a user by ID
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
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone_number:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated
 */
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, phone_number, address } = req.body;
  db.query(
    'UPDATE Users SET first_name = ?, last_name = ?, email = ?, phone_number = ?, address = ?, updated_at = CURRENT_TIMESTAMP WHERE user_id = ?',
    [first_name, last_name, email, phone_number, address, id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'User updated' });
    }
  );
});

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Soft delete a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User soft deleted
 */
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  db.query('UPDATE Users SET deleted_at = CURRENT_TIMESTAMP WHERE user_id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'User soft deleted' });
  });
});

// Routes for Products Table
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
  db.query('SELECT * FROM Products WHERE deleted_at IS NULL', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product details
 */
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM Products WHERE product_id = ? AND deleted_at IS NULL', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0] || {});
  });
});

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               sku:
 *                 type: string
 *               price:
 *                 type: number
 *               stock:
 *                 type: integer
 *               category_id:
 *                 type: string
 *               image_url:
 *                 type: string
 *     responses:
 *       201:
 *         description: Product created
 */
app.post('/products', (req, res) => {
  const { name, description, sku, price, stock, category_id, image_url } = req.body;
  const product_id = require('crypto').randomUUID();
  db.query(
    'INSERT INTO Products (product_id, name, description, sku, price, stock, category_id, image_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    [product_id, name, description, sku, price, stock, category_id, image_url],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Product created', product_id });
    }
  );
});

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Update a product by ID
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
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               sku:
 *                 type: string
 *               price:
 *                 type: number
 *               stock:
 *                 type: integer
 *               category_id:
 *                 type: string
 *               image_url:
 *                 type: string
 *     responses:
 *       200:
 *         description: Product updated
 */
app.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const { name, description, sku, price, stock, category_id, image_url } = req.body;
  db.query(
    'UPDATE Products SET name = ?, description = ?, sku = ?, price = ?, stock = ?, category_id = ?, image_url = ?, updated_at = CURRENT_TIMESTAMP WHERE product_id = ?',
    [name, description, sku, price, stock, category_id, image_url, id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Product updated' });
    }
  );
});

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Soft delete a product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product soft deleted
 */
app.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  db.query('UPDATE Products SET deleted_at = CURRENT_TIMESTAMP WHERE product_id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Product soft deleted' });
  });
});

// Routes for Orders Table
/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders
 *     responses:
 *       200:
 *         description: List of orders
 */
app.get('/orders', (req, res) => {
  db.query('SELECT * FROM Orders WHERE deleted_at IS NULL', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Get an order by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order details
 */
app.get('/orders/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM Orders WHERE order_id = ? AND deleted_at IS NULL', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0] || {});
  });
});

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: string
 *               status:
 *                 type: string
 *               total_price:
 *                 type: number
 *               tax_amount:
 *                 type: number
 *               tracking_number:
 *                 type: string
 *               carrier_name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Order created
 */
app.post('/orders', (req, res) => {
  const { user_id, status, total_price, tax_amount, tracking_number, carrier_name } = req.body;
  const order_id = require('crypto').randomUUID();
  db.query(
    'INSERT INTO Orders (order_id, user_id, status, total_price, tax_amount, tracking_number, carrier_name) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [order_id, user_id, status, total_price, tax_amount, tracking_number, carrier_name],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Order created', order_id });
    }
  );
});

/**
 * @swagger
 * /orders/{id}:
 *   put:
 *     summary: Update an order by ID
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
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *               total_price:
 *                 type: number
 *               tax_amount:
 *                 type: number
 *               tracking_number:
 *                 type: string
 *               carrier_name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Order updated
 */
app.put('/orders/:id', (req, res) => {
  const { id } = req.params;
  const { status, total_price, tax_amount, tracking_number, carrier_name } = req.body;
  db.query(
    'UPDATE Orders SET status = ?, total_price = ?, tax_amount = ?, tracking_number = ?, carrier_name = ?, updated_at = CURRENT_TIMESTAMP WHERE order_id = ?',
    [status, total_price, tax_amount, tracking_number, carrier_name, id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Order updated' });
    }
  );
});

/**
 * @swagger
 * /orders/{id}:
 *   delete:
 *     summary: Soft delete an order by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order soft deleted
 */
app.delete('/orders/:id', (req, res) => {
  const { id } = req.params;
  db.query('UPDATE Orders SET deleted_at = CURRENT_TIMESTAMP WHERE order_id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Order soft deleted' });
  });
});

// Routes for OrderDetails Table
/**
 * @swagger
 * /order-details:
 *   get:
 *     summary: Get all order details
 *     responses:
 *       200:
 *         description: List of order details
 */
app.get('/order-details', (req, res) => {
  db.query('SELECT * FROM OrderDetails', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

/**
 * @swagger
 * /order-details/{id}:
 *   get:
 *     summary: Get order details by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order details
 */
app.get('/order-details/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM OrderDetails WHERE order_detail_id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0] || {});
  });
});

/**
 * @swagger
 * /order-details:
 *   post:
 *     summary: Create new order details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               order_id:
 *                 type: string
 *               product_id:
 *                 type: string
 *               quantity:
 *                 type: integer
 *               price:
 *                 type: number
 *               discount:
 *                 type: number
 *     responses:
 *       201:
 *         description: Order details created
 */
app.post('/order-details', (req, res) => {
  const { order_id, product_id, quantity, price, discount } = req.body;
  const order_detail_id = require('crypto').randomUUID();
  db.query(
    'INSERT INTO OrderDetails (order_detail_id, order_id, product_id, quantity, price, discount) VALUES (?, ?, ?, ?, ?, ?)',
    [order_detail_id, order_id, product_id, quantity, price, discount],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Order details created', order_detail_id });
    }
  );
});

/**
 * @swagger
 * /order-details/{id}:
 *   put:
 *     summary: Update order details by ID
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
 *             type: object
 *             properties:
 *               order_id:
 *                 type: string
 *               product_id:
 *                 type: string
 *               quantity:
 *                 type: integer
 *               price:
 *                 type: number
 *               discount:
 *                 type: number
 *     responses:
 *       200:
 *         description: Order details updated
 */
app.put('/order-details/:id', (req, res) => {
  const { id } = req.params;
  const { order_id, product_id, quantity, price, discount } = req.body;
  db.query(
    'UPDATE OrderDetails SET order_id = ?, product_id = ?, quantity = ?, price = ?, discount = ? WHERE order_detail_id = ?',
    [order_id, product_id, quantity, price, discount, id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Order details updated' });
    }
  );
});

/**
 * @swagger
 * /order-details/{id}:
 *   delete:
 *     summary: Delete order details by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order details deleted
 */
app.delete('/order-details/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM OrderDetails WHERE order_detail_id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Order details deleted' });
  });
});

// Routes for Reviews Table
/**
 * @swagger
 * /reviews:
 *   get:
 *     summary: Get all reviews
 *     responses:
 *       200:
 *         description: List of reviews
 */
app.get('/reviews', (req, res) => {
  db.query('SELECT * FROM Reviews', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

/**
 * @swagger
 * /reviews/{id}:
 *   get:
 *     summary: Get a review by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Review details
 */
app.get('/reviews/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM Reviews WHERE review_id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0] || {});
  });
});

/**
 * @swagger
 * /reviews:
 *   post:
 *     summary: Create a new review
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: string
 *               product_id:
 *                 type: string
 *               rating:
 *                 type: integer
 *               comment:
 *                 type: string
 *     responses:
 *       201:
 *         description: Review created
 */
app.post('/reviews', (req, res) => {
  const { user_id, product_id, rating, comment } = req.body;
  const review_id = require('crypto').randomUUID();
  db.query(
    'INSERT INTO Reviews (review_id, user_id, product_id, rating, comment) VALUES (?, ?, ?, ?, ?)',
    [review_id, user_id, product_id, rating, comment],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Review created', review_id });
    }
  );
});

/**
 * @swagger
 * /reviews/{id}:
 *   put:
 *     summary: Update a review by ID
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
 *             type: object
 *             properties:
 *               rating:
 *                 type: integer
 *               comment:
 *                 type: string
 *     responses:
 *       200:
 *         description: Review updated
 */
app.put('/reviews/:id', (req, res) => {
  const { id } = req.params;
  const { rating, comment } = req.body;
  db.query(
    'UPDATE Reviews SET rating = ?, comment = ?, updated_at = CURRENT_TIMESTAMP WHERE review_id = ?',
    [rating, comment, id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Review updated' });
    }
  );
});

/**
 * @swagger
 * /reviews/{id}:
 *   delete:
 *     summary: Delete a review by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Review deleted
 */
app.delete('/reviews/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM Reviews WHERE review_id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Review deleted' });
  });
});

// Routes for Cart Table
/**
 * @swagger
 * /cart:
 *   get:
 *     summary: Get all cart items
 *     responses:
 *       200:
 *         description: List of cart items
 */
app.get('/cart', (req, res) => {
  db.query('SELECT * FROM Cart', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

/**
 * @swagger
 * /cart/{id}:
 *   get:
 *     summary: Get a cart item by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cart item details
 */
app.get('/cart/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM Cart WHERE cart_id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0] || {});
  });
});

/**
 * @swagger
 * /cart:
 *   post:
 *     summary: Add an item to the cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: string
 *               product_id:
 *                 type: string
 *               quantity:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Item added to cart
 */
app.post('/cart', (req, res) => {
  const { user_id, product_id, quantity } = req.body;
  const cart_id = require('crypto').randomUUID();
  db.query(
    'INSERT INTO Cart (cart_id, user_id, product_id, quantity) VALUES (?, ?, ?, ?)',
    [cart_id, user_id, product_id, quantity],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Item added to cart', cart_id });
    }
  );
});

/**
 * @swagger
 * /cart/{id}:
 *   put:
 *     summary: Update a cart item by ID
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
 *             type: object
 *             properties:
 *               quantity:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Cart item updated
 */
app.put('/cart/:id', (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  db.query('UPDATE Cart SET quantity = ?, updated_at = CURRENT_TIMESTAMP WHERE cart_id = ?', [quantity, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Cart item updated' });
  });
});

/**
 * @swagger
 * /cart/{id}:
 *   delete:
 *     summary: Delete a cart item by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cart item deleted
 */
app.delete('/cart/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM Cart WHERE cart_id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Cart item deleted' });
  });
});

// Routes for Payments Table
/**
 * @swagger
 * /payments:
 *   get:
 *     summary: Get all payments
 *     responses:
 *       200:
 *         description: List of payments
 */
app.get('/payments', (req, res) => {
  db.query('SELECT * FROM Payments', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

/**
 * @swagger
 * /payments/{id}:
 *   get:
 *     summary: Get a payment by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Payment details
 */
app.get('/payments/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM Payments WHERE payment_id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0] || {});
  });
});

/**
 * @swagger
 * /payments:
 *   post:
 *     summary: Create a new payment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               order_id:
 *                 type: string
 *               payment_method:
 *                 type: string
 *               payment_status:
 *                 type: string
 *               transaction_id:
 *                 type: string
 *               amount:
 *                 type: number
 *               currency:
 *                 type: string
 *     responses:
 *       201:
 *         description: Payment created
 */
app.post('/payments', (req, res) => {
  const { order_id, payment_method, payment_status, transaction_id, amount, currency } = req.body;
  const payment_id = require('crypto').randomUUID();
  db.query(
    'INSERT INTO Payments (payment_id, order_id, payment_method, payment_status, transaction_id, amount, currency) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [payment_id, order_id, payment_method, payment_status, transaction_id, amount, currency],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Payment created', payment_id });
    }
  );
});

/**
 * @swagger
 * /payments/{id}:
 *   put:
 *     summary: Update a payment by ID
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
 *             type: object
 *             properties:
 *               payment_status:
 *                 type: string
 *               transaction_id:
 *                 type: string
 *               amount:
 *                 type: number
 *               currency:
 *                 type: string
 *     responses:
 *       200:
 *         description: Payment updated
 */
app.put('/payments/:id', (req, res) => {
  const { id } = req.params;
  const { payment_status, transaction_id, amount, currency } = req.body;
  db.query(
    'UPDATE Payments SET payment_status = ?, transaction_id = ?, amount = ?, currency = ?, updated_at = CURRENT_TIMESTAMP WHERE payment_id = ?',
    [payment_status, transaction_id, amount, currency, id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Payment updated' });
    }
  );
});

/**
 * @swagger
 * /payments/{id}:
 *   delete:
 *     summary: Delete a payment by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Payment deleted
 */
app.delete('/payments/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM Payments WHERE payment_id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Payment deleted' });
  });
});

// Routes for Wishlist Table
/**
 * @swagger
 * /wishlist:
 *   get:
 *     summary: Get all wishlist items
 *     responses:
 *       200:
 *         description: List of wishlist items
 */
app.get('/wishlist', (req, res) => {
  db.query('SELECT * FROM Wishlist', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

/**
 * @swagger
 * /wishlist/{id}:
 *   get:
 *     summary: Get a wishlist item by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Wishlist item details
 */
app.get('/wishlist/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM Wishlist WHERE wishlist_id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0] || {});
  });
});

/**
 * @swagger
 * /wishlist:
 *   post:
 *     summary: Add an item to the wishlist
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: string
 *               product_id:
 *                 type: string
 *               notes:
 *                 type: string
 *               shared_with:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Item added to wishlist
 */
app.post('/wishlist', (req, res) => {
  const { user_id, product_id, notes, shared_with } = req.body;
  const wishlist_id = require('crypto').randomUUID();
  db.query(
    'INSERT INTO Wishlist (wishlist_id, user_id, product_id, notes, shared_with) VALUES (?, ?, ?, ?, ?)',
    [wishlist_id, user_id, product_id, notes, JSON.stringify(shared_with)],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Item added to wishlist', wishlist_id });
    }
  );
});

/**
 * @swagger
 * /wishlist/{id}:
 *   put:
 *     summary: Update a wishlist item by ID
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
 *             type: object
 *             properties:
 *               notes:
 *                 type: string
 *               shared_with:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Wishlist item updated
 */
app.put('/wishlist/:id', (req, res) => {
  const { id } = req.params;
  const { notes, shared_with } = req.body;
  db.query(
    'UPDATE Wishlist SET notes = ?, shared_with = ?, updated_at = CURRENT_TIMESTAMP WHERE wishlist_id = ?',
    [notes, JSON.stringify(shared_with), id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Wishlist item updated' });
    }
  );
});

/**
 * @swagger
 * /wishlist/{id}:
 *   delete:
 *     summary: Delete a wishlist item by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Wishlist item deleted
 */
app.delete('/wishlist/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM Wishlist WHERE wishlist_id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Wishlist item deleted' });
  });
});

// Routes for Currencies Table
/**
 * @swagger
 * /currencies:
 *   get:
 *     summary: Get all currencies
 *     responses:
 *       200:
 *         description: List of currencies
 */
app.get('/currencies', (req, res) => {
  db.query('SELECT * FROM Currencies', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

/**
 * @swagger
 * /currencies/{code}:
 *   get:
 *     summary: Get a currency by code
 *     parameters:
 *       - in: path
 *         name: code
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Currency details
 */
app.get('/currencies/:code', (req, res) => {
  const { code } = req.params;
  db.query('SELECT * FROM Currencies WHERE currency_code = ?', [code], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0] || {});
  });
});

/**
 * @swagger
 * /currencies:
 *   post:
 *     summary: Create a new currency
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               currency_code:
 *                 type: string
 *               currency_name:
 *                 type: string
 *               conversion_rate:
 *                 type: number
 *               rate_effective_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Currency created
 */
app.post('/currencies', (req, res) => {
  const { currency_code, currency_name, conversion_rate, rate_effective_date } = req.body;
  db.query(
    'INSERT INTO Currencies (currency_code, currency_name, conversion_rate, rate_effective_date) VALUES (?, ?, ?, ?)',
    [currency_code, currency_name, conversion_rate, rate_effective_date],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Currency created', currency_code });
    }
  );
});

/**
 * @swagger
 * /currencies/{code}:
 *   put:
 *     summary: Update a currency by code
 *     parameters:
 *       - in: path
 *         name: code
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               currency_name:
 *                 type: string
 *               conversion_rate:
 *                 type: number
 *               rate_effective_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Currency updated
 */
app.put('/currencies/:code', (req, res) => {
  const { code } = req.params;
  const { currency_name, conversion_rate, rate_effective_date } = req.body;
  db.query(
    'UPDATE Currencies SET currency_name = ?, conversion_rate = ?, rate_effective_date = ?, updated_at = CURRENT_TIMESTAMP WHERE currency_code = ?',
    [currency_name, conversion_rate, rate_effective_date, code],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Currency updated' });
    }
  );
});

/**
 * @swagger
 * /currencies/{code}:
 *   delete:
 *     summary: Delete a currency by code
 *     parameters:
 *       - in: path
 *         name: code
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Currency deleted
 */
app.delete('/currencies/:code', (req, res) => {
  const { code } = req.params;
  db.query('DELETE FROM Currencies WHERE currency_code = ?', [code], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Currency deleted' });
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});