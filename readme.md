<!-- Doc 2 is in language en-US. Optimizing Doc 2 for scanning, using lists and bold where appropriate, but keeping language en-US, and adding id attributes to every HTML element: --><h1 id="avpvqg">E-Commerce API</h1>
<p id="ojgm5ds"><strong>This is a RESTful API</strong> for managing an e-commerce platform. It provides endpoints for managing:</p>
<ul id="ojgm5ds">
<li id="ojgm5ds">Users</li>
<li id="ojgm5ds">Products</li>
<li id="ojgm5ds">Orders</li>
<li id="ojgm5ds">Reviews</li>
<li id="ojgm5ds">Cart</li>
<li id="ojgm5ds">Payments</li>
<li id="ojgm5ds">Wishlist</li>
<li id="ojgm5ds">Currencies</li>
</ul>
<p id="ojgm5ds">The API is built using <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MySQL</strong>, and it includes <strong>Swagger documentation</strong> for easy testing and exploration.</p>
<h2 id="6oa62bp">Features</h2>
<ul id="9fnn3yy">
<li id="luaqqs"><strong>User Management</strong>: Create, read, update, and soft delete users.</li>
<li id="zch0zhe"><strong>Product Management</strong>: Create, read, update, and soft delete products.</li>
<li id="hmyy8xy"><strong>Order Management</strong>: Create, read, update, and soft delete orders.</li>
<li id="aaazrni"><strong>Order Details</strong>: Manage order details, including products, quantities, and discounts.</li>
<li id="inpoybl"><strong>Reviews</strong>: Allow users to leave reviews for products.</li>
<li id="dnacwy4"><strong>Cart</strong>: Manage user shopping carts.</li>
<li id="m4l4hr"><strong>Payments</strong>: Handle payment transactions.</li>
<li id="mgm84qa"><strong>Wishlist</strong>: Allow users to add products to their wishlist.</li>
<li id="7i9b1bt"><strong>Currencies</strong>: Manage currency conversion rates.</li>
</ul>
<h2 id="8gx7ghe">Technologies Used</h2>
<ul id="y6t4kyn">
<li id="23g7s4"><strong>Node.js</strong>: A JavaScript runtime for building scalable network applications.</li>
<li id="kln21pa"><strong>Express</strong>: A web framework for Node.js.</li>
<li id="f35hj26"><strong>MySQL</strong>: A relational database management system.</li>
<li id="p85gv2"><strong>Swagger</strong>: For API documentation and testing.</li>
</ul>
<h2 id="j9b2st">Getting Started</h2>
<h3 id="h3gnkp">Prerequisites</h3>
<ul id="c07p2gp">
<li id="0a0jc2">Node.js installed on your machine.</li>
<li id="svhddp2">MySQL server running locally or remotely.</li>
<li id="bhugg5">Basic knowledge of RESTful APIs and JavaScript.</li>
</ul>
<h3 id="k7hn9o">Installation</h3>
<ol start="1" id="n36j5ri">
<li id="259v2sp"><strong>Clone the repository</strong>:</li>
<pre id="3lqcxx"><span id="yphcgyc">git</span> clone https://github.com/yourusername/e-commerce-api.git
<span id="070lqxe">cd</span> e-commerce-api</pre>
<li id="o7rwd7q"><strong>Install dependencies</strong>:</li>
<pre id="g6l8s"><span id="4p9owki">npm</span> <span id="z7pfbnc">install</span></pre>
<li id="jfnj89r"><strong>Set up the database</strong>:</li>
<ul id="39m3plg">
<li id="u0qmpk">Create a MySQL database named <code id="hk1sjdf">your_database_name</code>.</li>
<li id="asbqpqn">Update the database connection details in the <code id="c5xb5">db</code> configuration in <code id="d9nu9k4">app.js</code>:</li>
<pre id="v5qzzb5"><span id="e75ecu2p">const</span> db <span id="ro1da5o">=</span> mysql<span id="csz5ayk">.</span><span id="zn6lpxc">createConnection</span><span id="hic3h1q">(</span><span id="dhmybse">{</span>
  <span id="7qf7zht">host</span><span id="mqk50v">:</span> <span id="ytsfg1q">'localhost'</span><span id="gfuw7el">,</span>
  <span id="p3z6mkr">user</span><span id="okr73uq">:</span> <span id="9ih5dz">'root'</span><span id="vtu5kk">,</span>
  <span id="d4k5jeh">password</span><span id="jd9ejr">:</span> <span id="r1wgcp7">'password'</span><span id="hrrbr8">,</span>
  <span id="sz3m3my">database</span><span id="srzfo1">:</span> <span id="847yy27">'your_database_name'</span><span id="yrbqyq">,</span>
<span id="hvokc5k">}</span><span id="yfnozsn">)</span><span id="qs0cds">;</span></pre>
</ul>
</li>
<li id="fwzn2zi"><strong>Run the server</strong>:</li>
<pre id="llkylt"><span id="20k1q4n">npm</span> start</pre>
<li id="4568cer"><strong>Access the API</strong>:</li>
<ul id="5a1733g">
<li id="r9z9iea">The API will be running at <code id="f0p9pa5">http://localhost:3000</code>.</li>
<li id="ou9ar7">Swagger documentation will be available at <code id="o64e6n9">http://localhost:3000/api-docs</code>.</li>
</ul>
</li>
</ol>
<!-- Doc 2 is in language en-US. Optimizing Doc 2 for scanning, using lists and bold where appropriate, but keeping language en-US, and adding id attributes to every HTML element: --><h2 id="ggsoqe9">API Endpoints</h2>

<h3 id="uc3zczu">Users</h3>
<p id="uc3zczu">The following endpoints are available for managing users:</p>
<ul id="irmfron">
<li id="b76cav"><strong id="kosaeid">GET /users</strong>: Get all users.</li>
<li id="tfswj59"><strong id="btclm4">GET /users/{id}</strong>: Get a user by ID.</li>
<li id="z0szxif"><strong id="c0z6347">POST /users</strong>: Create a new user.</li>
<li id="hglroke"><strong id="2pawqc">PUT /users/{id}</strong>: Update a user by ID.</li>
<li id="54452h"><strong id="9p988mm">DELETE /users/{id}</strong>: Soft delete a user by ID.</li>
</ul>

<h3 id="s5yvsm">Products</h3>
<p id="s5yvsm">The following endpoints are available for managing products:</p>
<ul id="8jx9ptp">
<li id="8dik9i7"><strong id="lg1arb2j">GET /products</strong>: Get all products.</li>
<li id="whfz1j"><strong id="q8mq644">GET /products/{id}</strong>: Get a product by ID.</li>
<li id="luixt88"><strong id="d9t2ger">POST /products</strong>: Create a new product.</li>
<li id="6u3sjm"><strong id="8gtus0s">PUT /products/{id}</strong>: Update a product by ID.</li>
<li id="vmdl739"><strong id="4t703i9">DELETE /products/{id}</strong>: Soft delete a product by ID.</li>
</ul>

<h3 id="b8681b">Orders</h3>
<p id="b8681b">The following endpoints are available for managing orders:</p>
<ul id="p5d29y">
<li id="e6e6ytm"><strong id="f0n2k3d">GET /orders</strong>: Get all orders.</li>
<li id="74t714h"><strong id="26b00df">GET /orders/{id}</strong>: Get an order by ID.</li>
<li id="s92amsu"><strong id="wfvgof">POST /orders</strong>: Create a new order.</li>
<li id="whgfo5"><strong id="xm09u1m">PUT /orders/{id}</strong>: Update an order by ID.</li>
<li id="6p1pdvo"><strong id="yg8t0xm">DELETE /orders/{id}</strong>: Soft delete an order by ID.</li>
</ul>

<h3 id="yyy9aug">Order Details</h3>
<p id="yyy9aug">The following endpoints are available for managing order details:</p>
<ul id="fgch6o">
<li id="2s9bc0cb"><strong id="glibc1">GET /order-details</strong>: Get all order details.</li>
<li id="fhb5u9"><strong id="qf17u83">GET /order-details/{id}</strong>: Get order details by ID.</li>
<li id="fn7ar3o"><strong id="6fvn2a">POST /order-details</strong>: Create new order details.</li>
<li id="ahv4tk"><strong id="9wdvyzm">PUT /order-details/{id}</strong>: Update order details by ID.</li>
<li id="2cazelp"><strong id="wbm0st">DELETE /order-details/{id}</strong>: Delete order details by ID.</li>
</ul>

<h3 id="dj38q2c">Reviews</h3>
<p id="dj38q2c">The following endpoints are available for managing reviews:</p>
<ul id="gdearxk">
<li id="ultvv05"><strong id="o71x2kj">GET /reviews</strong>: Get all reviews.</li>
<li id="q4y88b8"><strong id="bnlorui">GET /reviews/{id}</strong>: Get a review by ID.</li>
<li id="wjccekl"><strong id="954uxwv">POST /reviews</strong>: Create a new review.</li>
<li id="kxmdcdb"><strong id="d3j7rck">PUT /reviews/{id}</strong>: Update a review by ID.</li>
<li id="80dxw2n"><strong id="0ou6p92">DELETE /reviews/{id}</strong>: Delete a review by ID.</li>
</ul>

<h3 id="kmu2rhm">Cart</h3>
<p id="kmu2rhm">The following endpoints are available for managing the cart:</p>
<ul id="koso1hg">
<li id="hsyd1r"><strong id="8zfcl8">GET /cart</strong>: Get all cart items.</li>
<li id="5wl2iih"><strong id="dsfb7j">GET /cart/{id}</strong>: Get a cart item by ID.</li>
<li id="jv0h9ge"><strong id="i625fa">POST /cart</strong>: Add an item to the cart.</li>
<li id="67x9e3i"><strong id="xcxsc2c">PUT /cart/{id}</strong>: Update a cart item by ID.</li>
<li id="3217ez"><strong id="7a26hg">DELETE /cart/{id}</strong>: Delete a cart item by ID.</li>
</ul>

<h3 id="f4zsv3h">Payments</h3>
<p id="f4zsv3h">The following endpoints are available for managing payments:</p>
<ul id="bs6gq97">
<li id="1ug4er8l"><strong id="hgujroq">GET /payments</strong>: Get all payments.</li>
<li id="jw7vq18"><strong id="8kwq0ym">GET /payments/{id}</strong>: Get a payment by ID.</li>
<li id="fawnblf"><strong id="1x3d8vs">POST /payments</strong>: Create a new payment.</li>
<li id="tmgz7un"><strong id="rf19dg">PUT /payments/{id}</strong>: Update a payment by ID.</li>
<li id="xk8o6rs"><strong id="h4mq3z">DELETE /payments/{id}</strong>: Delete a payment by ID.</li>
</ul>
<!-- Doc 2 is in language en-US. Optimizing Doc 2 for scanning, using lists and bold where appropriate, but keeping language en-US, and adding id attributes to every HTML element: --><h3 id="x13qu3">Wishlist</h3>
<p id="x13qu3">Here are the available API endpoints for managing your wishlist:</p>
<ul id="dp9bag8">
<li id="wlsocxi"><strong id="5kgggyd">GET /wishlist</strong>: Get all wishlist items.</li>
<li id="14sjp55"><strong id="r9pqlh">GET /wishlist/{id}</strong>: Get a wishlist item by ID.</li>
<li id="x21vwor"><strong id="whovvyh">POST /wishlist</strong>: Add an item to the wishlist.</li>
<li id="pidrht7"><strong id="i6wplt">PUT /wishlist/{id}</strong>: Update a wishlist item by ID.</li>
<li id="y3gbsy"><strong id="4jrw3qv">DELETE /wishlist/{id}</strong>: Delete a wishlist item by ID.</li>
</ul>
<h3 id="mde4oel">Currencies</h3>
<p id="mde4oel">Here are the available API endpoints for managing currencies:</p>
<ul id="4e530x">
<li id="j9mou41j"><strong id="vkp2fbg">GET /currencies</strong>: Get all currencies.</li>
<li id="0svu62j"><strong id="n2xuxee">GET /currencies/{code}</strong>: Get a currency by code.</li>
<li id="hpwi77j"><strong id="dswpyv">POST /currencies</strong>: Create a new currency.</li>
<li id="965mtzd"><strong id="wsar369">PUT /currencies/{code}</strong>: Update a currency by code.</li>
<li id="9oy9xgj"><strong id="e7x6ohq">DELETE /currencies/{code}</strong>: Delete a currency by code.</li>
</ul>
<h2 id="qo0p6y">Testing the API</h2>
<p id="0ql9ed">You can test the API using the <strong>Swagger UI</strong> available at <code id="jm7yo2v">http://localhost:3000/api-docs</code>. The Swagger UI provides an interactive interface to explore and test all the API endpoints.</p>
<h2 id="sdwm9wp">Contributing</h2>
<p id="klbic6n"><strong>Contributions are welcome!</strong> Please open an issue or submit a pull request for any improvements or bug fixes.</p>
<h2 id="ytoyjie">License</h2>
<p id="2ihn0ps">This project is licensed under the <strong>MIT License</strong>. See the <a href="https://chat.deepseek.com/a/chat/s/LICENSE" target="_blank" rel="noreferrer" id="pqxtzb">LICENSE</a> file for details.</p>
<h2 id="tepifvv">Acknowledgments</h2>

# E-commerce Database Schema

## Overview

This database schema is designed for an e-commerce platform, providing a robust structure for managing users, products, orders, payments, and more. It is built with scalability, data integrity, and security in mind, ensuring a reliable foundation for an online store.

---

## Table Structure

### 1. **Users**
Stores user information, including personal details and authentication data.

| Column Name      | Data Type       | Constraints                          | Description                          |
|------------------|-----------------|--------------------------------------|--------------------------------------|
| `user_id`        | CHAR(36)        | PRIMARY KEY                          | Unique identifier for the user.      |
| `first_name`     | VARCHAR(50)     | NOT NULL                             | User's first name.                   |
| `last_name`      | VARCHAR(50)     | NOT NULL                             | User's last name.                    |
| `email`          | VARCHAR(100)    | UNIQUE, NOT NULL, CHECK (email LIKE '%_@__%.__%') | Valid email address. |
| `password_hash`  | VARCHAR(255)    | NOT NULL                             | Securely hashed password.            |
| `phone_number`   | VARCHAR(15)     | CHECK (phone_number ~ '^[+]?[0-9]{7,15}$') | Valid phone number. |
| `address`        | TEXT            |                                      | User's address.                      |
| `created_at`     | TIMESTAMP       | DEFAULT CURRENT_TIMESTAMP            | Timestamp of user creation.          |
| `updated_at`     | TIMESTAMP       | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Last update timestamp. |
| `deleted_at`     | TIMESTAMP       | NULL                                 | Timestamp for soft deletion.         |

---

### 2. **Categories**
Manages product categories, including hierarchical relationships.

| Column Name      | Data Type       | Constraints                          | Description                          |
|------------------|-----------------|--------------------------------------|--------------------------------------|
| `category_id`    | CHAR(36)        | PRIMARY KEY                          | Unique identifier for the category.  |
| `name`           | VARCHAR(100)    | NOT NULL                             | Name of the category.                |
| `description`    | TEXT            |                                      | Description of the category.         |
| `parent_id`      | CHAR(36)        | FOREIGN KEY REFERENCES Categories(category_id) ON DELETE SET NULL | Parent category ID for hierarchy. |
| `hierarchy_depth`| INT             | DEFAULT 0                            | Depth of the category in the hierarchy. |
| `created_at`     | TIMESTAMP       | DEFAULT CURRENT_TIMESTAMP            | Timestamp of category creation.      |
| `updated_at`     | TIMESTAMP       | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Last update timestamp. |

---

### 3. **Products**
Stores product details, including pricing, inventory, and categorization.

| Column Name      | Data Type       | Constraints                          | Description                          |
|------------------|-----------------|--------------------------------------|--------------------------------------|
| `product_id`     | CHAR(36)        | PRIMARY KEY                          | Unique identifier for the product.   |
| `name`           | VARCHAR(150)    | NOT NULL                             | Name of the product.                 |
| `description`    | TEXT            |                                      | Description of the product.          |
| `sku`            | VARCHAR(50)     | UNIQUE, NOT NULL                     | Stock Keeping Unit for inventory.    |
| `price`          | DECIMAL(10, 2)  | NOT NULL, CHECK (price >= 0)         | Price of the product.                |
| `stock`          | INT             | DEFAULT 0, CHECK (stock >= 0)        | Available stock quantity.            |
| `category_id`    | CHAR(36)        | FOREIGN KEY REFERENCES Categories(category_id) ON DELETE SET NULL | Associated category ID. |
| `is_active`      | BOOLEAN         | DEFAULT TRUE                         | Indicates if the product is active.  |
| `image_url`      | TEXT            | CHECK (image_url LIKE 'http%')       | URL of the product image.            |
| `created_at`     | TIMESTAMP       | DEFAULT CURRENT_TIMESTAMP            | Timestamp of product creation.       |
| `updated_at`     | TIMESTAMP       | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Last update timestamp. |
| `deleted_at`     | TIMESTAMP       | NULL                                 | Timestamp for soft deletion.         |

---

### 4. **Orders**
Tracks customer orders, including status and shipping details.

| Column Name      | Data Type       | Constraints                          | Description                          |
|------------------|-----------------|--------------------------------------|--------------------------------------|
| `order_id`       | CHAR(36)        | PRIMARY KEY                          | Unique identifier for the order.     |
| `user_id`        | CHAR(36)        | FOREIGN KEY REFERENCES Users(user_id) ON DELETE CASCADE | Associated user ID. |
| `status`         | ENUM            | DEFAULT 'Pending'                    | Order status (Pending, Shipped, Delivered, Cancelled). |
| `total_price`    | DECIMAL(10, 2)  | NOT NULL, CHECK (total_price >= 0)   | Total price of the order.            |
| `tax_amount`     | DECIMAL(10, 2)  | DEFAULT 0.00, CHECK (tax_amount >= 0)| Tax amount for the order.            |
| `tracking_number`| VARCHAR(100)    |                                      | Shipment tracking number.            |
| `carrier_name`   | VARCHAR(50)     |                                      | Name of the shipping carrier.        |
| `created_at`     | TIMESTAMP       | DEFAULT CURRENT_TIMESTAMP            | Timestamp of order creation.         |
| `updated_at`     | TIMESTAMP       | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Last update timestamp. |
| `deleted_at`     | TIMESTAMP       | NULL                                 | Timestamp for soft deletion.         |

---

### 5. **OrderDetails**
Stores details of products included in each order.

| Column Name      | Data Type       | Constraints                          | Description                          |
|------------------|-----------------|--------------------------------------|--------------------------------------|
| `order_detail_id`| CHAR(36)        | PRIMARY KEY                          | Unique identifier for the order detail. |
| `order_id`       | CHAR(36)        | FOREIGN KEY REFERENCES Orders(order_id) ON DELETE CASCADE | Associated order ID. |
| `product_id`     | CHAR(36)        | FOREIGN KEY REFERENCES Products(product_id) ON DELETE CASCADE | Associated product ID. |
| `quantity`       | INT             | NOT NULL, CHECK (quantity > 0)       | Quantity of the product in the order. |
| `price`          | DECIMAL(10, 2)  | NOT NULL, CHECK (price >= 0)         | Price of the product at the time of purchase. |
| `discount`       | DECIMAL(10, 2)  | DEFAULT 0.00, CHECK (discount >= 0)  | Discount applied to the product.     |
| `subtotal`       | DECIMAL(10, 2)  | GENERATED ALWAYS AS (quantity * price - discount) STORED | Calculated subtotal. |

---

### 6. **Reviews**
Manages product reviews submitted by users.

| Column Name      | Data Type       | Constraints                          | Description                          |
|------------------|-----------------|--------------------------------------|--------------------------------------|
| `review_id`      | CHAR(36)        | PRIMARY KEY                          | Unique identifier for the review.    |
| `user_id`        | CHAR(36)        | FOREIGN KEY REFERENCES Users(user_id) ON DELETE CASCADE | Associated user ID. |
| `product_id`     | CHAR(36)        | FOREIGN KEY REFERENCES Products(product_id) ON DELETE CASCADE | Associated product ID. |
| `rating`         | INT             | CHECK (rating BETWEEN 1 AND 5)       | Rating given by the user (1-5).      |
| `comment`        | TEXT            |                                      | Review comment.                      |
| `is_approved`    | BOOLEAN         | DEFAULT FALSE                        | Indicates if the review is approved. |
| `approved_by`    | CHAR(36)        |                                      | Moderator who approved the review.   |
| `created_at`     | TIMESTAMP       | DEFAULT CURRENT_TIMESTAMP            | Timestamp of review creation.        |
| `updated_at`     | TIMESTAMP       | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Last update timestamp. |

---

### 7. **Cart**
Manages user shopping carts.

| Column Name      | Data Type       | Constraints                          | Description                          |
|------------------|-----------------|--------------------------------------|--------------------------------------|
| `cart_id`        | CHAR(36)        | PRIMARY KEY                          | Unique identifier for the cart.      |
| `user_id`        | CHAR(36)        | FOREIGN KEY REFERENCES Users(user_id) ON DELETE CASCADE | Associated user ID. |
| `product_id`     | CHAR(36)        | FOREIGN KEY REFERENCES Products(product_id) ON DELETE CASCADE | Associated product ID. |
| `quantity`       | INT             | DEFAULT 1, CHECK (quantity > 0)      | Quantity of the product in the cart. |
| `added_at`       | TIMESTAMP       | DEFAULT CURRENT_TIMESTAMP            | Timestamp of product addition.       |
| `updated_at`     | TIMESTAMP       | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Last update timestamp. |
| `session_id`     | CHAR(36)        |                                      | Session ID for guest carts.          |

---

### 8. **Payments**
Tracks payment transactions for orders.

| Column Name      | Data Type       | Constraints                          | Description                          |
|------------------|-----------------|--------------------------------------|--------------------------------------|
| `payment_id`     | CHAR(36)        | PRIMARY KEY                          | Unique identifier for the payment.   |
| `order_id`       | CHAR(36)        | FOREIGN KEY REFERENCES Orders(order_id) ON DELETE CASCADE | Associated order ID. |
| `payment_method` | ENUM            |                                      | Payment method (Credit Card, Debit Card, PayPal, Bank Transfer). |
| `payment_status` | ENUM            | DEFAULT 'Pending'                    | Payment status (Pending, Completed, Failed). |
| `transaction_id` | VARCHAR(255)    |                                      | Transaction ID from the payment gateway. |
| `amount`         | DECIMAL(10, 2)  | NOT NULL, CHECK (amount >= 0)        | Payment amount.                      |
| `currency`       | VARCHAR(10)     | DEFAULT 'USD'                        | Currency of the payment.             |
| `is_refunded`    | BOOLEAN         | DEFAULT FALSE                        | Indicates if the payment is refunded. |
| `refund_amount`  | DECIMAL(10, 2)  | DEFAULT 0.00, CHECK (refund_amount >= 0) | Refund amount.                   |
| `payment_date`   | TIMESTAMP       | DEFAULT CURRENT_TIMESTAMP            | Timestamp of the payment.            |
| `error_message`  | TEXT            |                                      | Error message if payment fails.      |

---

### 9. **Wishlist**
Manages user wishlists, including sharing capabilities.

| Column Name      | Data Type       | Constraints                          | Description                          |
|------------------|-----------------|--------------------------------------|--------------------------------------|
| `wishlist_id`    | CHAR(36)        | PRIMARY KEY                          | Unique identifier for the wishlist.  |
| `user_id`        | CHAR(36)        | FOREIGN KEY REFERENCES Users(user_id) ON DELETE CASCADE | Associated user ID. |
| `product_id`     | CHAR(36)        | FOREIGN KEY REFERENCES Products(product_id) ON DELETE CASCADE | Associated product ID. |
| `notes`          | TEXT            |                                      | Notes added by the user.             |
| `shared_with`    | JSON            |                                      | List of users the wishlist is shared with. |
| `added_at`       | TIMESTAMP       | DEFAULT CURRENT_TIMESTAMP            | Timestamp of product addition.       |
| `updated_at`     | TIMESTAMP       | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Last update timestamp. |

---

### 10. **Currencies**
Manages currency conversion rates.

| Column Name      | Data Type       | Constraints                          | Description                          |
|------------------|-----------------|--------------------------------------|--------------------------------------|
| `currency_code`  | VARCHAR(10)     | PRIMARY KEY                          | Currency code (e.g., USD, EUR).      |
| `currency_name`  | VARCHAR(50)     |                                      | Name of the currency.                |
| `conversion_rate`| DECIMAL(10, 6)  | NOT NULL                             | Conversion rate to a base currency.  |
| `rate_effective_date` | DATE      | NOT NULL                             | Date when the rate is effective.     |
| `updated_at`     | TIMESTAMP       | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Last update timestamp. |

---

## Indexes

Indexes are created on frequently queried columns to improve performance:

- `idx_users_email` on `Users(email)`
- `idx_products_name` on `Products(name)`
- `idx_categories_name` on `Categories(name)`
- `idx_orders_created_at` on `Orders(created_at)`
- `idx_orderdetails_order_id` on `OrderDetails(order_id)`
- `idx_cart_user_id` on `Cart(user_id)`

---

## Usage

### Example Queries

1. **Get all active products in a category:**

   ```sql
   SELECT * FROM Products
   WHERE category_id = 'category_uuid' AND is_active = TRUE; ```

<ol start="2" id="d7zy1">
<li id="508tivf">
<h3 id="ckel6b"><strong>Get all orders for a user:</strong></h3>
<pre id="bfjh82"><span id="a1f9tq9">SELECT</span> <span id="6rndpep">*</span> <span id="rfv6o6y">FROM</span> Orders
<span id="64p204k">WHERE</span> user_id <span id="oul437">=</span> <span id="09io6hn">'user_uuid'</span><span id="o4yjvoj">;</span></pre>
</li>
<li id="f8zxv2">
<h3 id="jdm76xq"><strong>Calculate total sales for a product:</strong></h3>
<pre id="01sbygg"><span id="aouh7tm">SELECT</span> <span id="bs3almw">SUM</span><span id="jt7cwee">(</span>subtotal<span id="jtejbwvf">)</span> <span id="0nfic5k">AS</span> total_sales
<span id="xpy6sdg">FROM</span> OrderDetails
<span id="yqrm0t9">WHERE</span> product_id <span id="jilxxgp">=</span> <span id="tzd2qvw">'product_uuid'</span><span id="35mcip5">;</span></pre>
</li>
</ol>
<hr id="airseb">
<h2 id="br7hb9r">Contribution Guidelines</h2>
<p id="br7hb9r">To ensure consistency and quality, please adhere to the following guidelines:</p>
<ul id="xy2n4rp">
<li id="s3g8n4e"><strong>Follow</strong> the existing naming conventions and constraints.</li>
<li id="rxh4q9f"><strong>Ensure</strong> backward compatibility when modifying tables.</li>
<li id="kffwj7"><strong>Document</strong> any changes in the schema and update this README accordingly.</li>
</ul>

<p id="tepifvv">We would like to thank:</p>
<ul id="agqq7">
<li id="wiku4f">The <strong>Node.js</strong> and <strong>Express</strong> communities for their excellent documentation and support.</li>
<li id="yko9ddtm">The <strong>Swagger</strong> team for providing an excellent tool for API documentation.</li>
</ul>
