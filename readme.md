# Database Schema
The main entities include:

## User:

id: Primary key
first_name: String, required
last_name: String, required
email: String, required, unique
password_hash: String, required
Timestamps: createdAt, updatedAt

## Product:

id: Primary key
name: String, required
description: Text
price: Decimal, required
stock: Integer, default 0
Timestamps: createdAt, updatedAt

## Cart:

id: Primary key
quantity: Integer, default 1
Foreign Keys:
userId: References User
productId: References Product
Timestamps: createdAt, updatedAt

## Order:

id: Primary key
status: Enum ('Pending', 'Shipped', 'Delivered', 'Cancelled'), default 'Pending'
total_price: Decimal, required
Foreign Key:
userId: References User
Timestamps: createdAt, updatedAt

## OrderDetails:

orderId: References Order
productId: References Product
Additional fields can be added as needed.

# API Endpoints
The API provides the following endpoints:

## Authentication:

POST /auth/register: Register a new user.
POST /auth/login: Authenticate a user and receive a JWT token.

## Products:

GET /products: Retrieve a list of products.
GET /products/:id: Retrieve a single product by ID.
POST /products: Create a new product.
PUT /products/:id: Update an existing product by ID.
DELETE /products/:id: Delete a product by ID.

## Cart:

GET /cart: Retrieve the current user's cart.
POST /cart: Add an item to the cart.
PUT /cart/:id: Update the quantity of an item in the cart.
DELETE /cart/:id: Remove an item from the cart.

## Orders:

GET /orders: Retrieve a list of the current user's orders.
GET /orders/:id: Retrieve a single order by ID.
POST /orders: Create a new order.
For detailed request and response formats, refer to

# Key Features:

## Authentication:

/auth/register for user registration.
/auth/login for login and token generation.

### User Routes:

/users/me to fetch user profile (requires authentication).

### Product and Cart Routes:

/products to get all products.
/cart to manage user's cart.

## Order Management:

/orders to get user's orders.

# Swagger Documentation:

Accessible at /api-docs.
