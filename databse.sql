-- Enhanced Users Table
CREATE TABLE Users (
    user_id CHAR(36) PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL CHECK (email LIKE '%_@__%.__%'),
    password_hash VARCHAR(255) NOT NULL, -- Ensure strong hashing (e.g., bcrypt or Argon2)
    phone_number VARCHAR(15) CHECK (phone_number ~ '^[+]?[0-9]{7,15}$'), -- Regex for phone validation
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- Enhanced Categories Table
CREATE TABLE Categories (
    category_id CHAR(36) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    parent_id CHAR(36),
    hierarchy_depth INT DEFAULT 0, -- For potential category depth tracking
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (parent_id) REFERENCES Categories(category_id) ON DELETE SET NULL
);

-- Enhanced Products Table
CREATE TABLE Products (
    product_id CHAR(36) PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    sku VARCHAR(50) UNIQUE NOT NULL, -- For better inventory tracking
    price DECIMAL(10, 2) NOT NULL CHECK (price >= 0),
    stock INT DEFAULT 0 CHECK (stock >= 0),
    category_id CHAR(36),
    is_active BOOLEAN DEFAULT TRUE,
    image_url TEXT CHECK (image_url LIKE 'http%'), -- Basic URL validation
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    FOREIGN KEY (category_id) REFERENCES Categories(category_id) ON DELETE SET NULL
);

-- Enhanced Orders Table
CREATE TABLE Orders (
    order_id CHAR(36) PRIMARY KEY,
    user_id CHAR(36),
    status ENUM('Pending', 'Shipped', 'Delivered', 'Cancelled') DEFAULT 'Pending',
    total_price DECIMAL(10, 2) NOT NULL CHECK (total_price >= 0),
    tax_amount DECIMAL(10, 2) DEFAULT 0.00 CHECK (tax_amount >= 0),
    tracking_number VARCHAR(100), -- Shipment tracking
    carrier_name VARCHAR(50), -- Carrier information
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

-- Enhanced Order Details Table
CREATE TABLE OrderDetails (
    order_detail_id CHAR(36) PRIMARY KEY,
    order_id CHAR(36),
    product_id CHAR(36),
    quantity INT NOT NULL CHECK (quantity > 0),
    price DECIMAL(10, 2) NOT NULL CHECK (price >= 0),
    discount DECIMAL(10, 2) DEFAULT 0.00 CHECK (discount >= 0),
    subtotal DECIMAL(10, 2) GENERATED ALWAYS AS (quantity * price - discount) STORED,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES Products(product_id) ON DELETE CASCADE
);

-- Enhanced Reviews Table
CREATE TABLE Reviews (
    review_id CHAR(36) PRIMARY KEY,
    user_id CHAR(36),
    product_id CHAR(36),
    rating INT CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    is_approved BOOLEAN DEFAULT FALSE, -- Moderation flag
    approved_by CHAR(36), -- Moderator reference
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES Products(product_id) ON DELETE CASCADE
);

-- Enhanced Cart Table
CREATE TABLE Cart (
    cart_id CHAR(36) PRIMARY KEY,
    user_id CHAR(36),
    product_id CHAR(36),
    quantity INT DEFAULT 1 CHECK (quantity > 0),
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    session_id CHAR(36), -- For guest carts
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES Products(product_id) ON DELETE CASCADE,
    UNIQUE (user_id, product_id)
);

-- Enhanced Payments Table
CREATE TABLE Payments (
    payment_id CHAR(36) PRIMARY KEY,
    order_id CHAR(36),
    payment_method ENUM('Credit Card', 'Debit Card', 'PayPal', 'Bank Transfer'),
    payment_status ENUM('Pending', 'Completed', 'Failed') DEFAULT 'Pending',
    transaction_id VARCHAR(255),
    amount DECIMAL(10, 2) NOT NULL CHECK (amount >= 0),
    currency VARCHAR(10) DEFAULT 'USD',
    is_refunded BOOLEAN DEFAULT FALSE, -- Refund tracking
    refund_amount DECIMAL(10, 2) DEFAULT 0.00 CHECK (refund_amount >= 0),
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    error_message TEXT,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id) ON DELETE CASCADE
);

-- Enhanced Wishlist Table
CREATE TABLE Wishlist (
    wishlist_id CHAR(36) PRIMARY KEY,
    user_id CHAR(36),
    product_id CHAR(36),
    notes TEXT,
    shared_with JSON, -- Allow sharing with multiple users
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES Products(product_id) ON DELETE CASCADE,
    UNIQUE (user_id, product_id)
);

-- Enhanced Currencies Table
CREATE TABLE Currencies (
    currency_code VARCHAR(10) PRIMARY KEY,
    currency_name VARCHAR(50),
    conversion_rate DECIMAL(10, 6) NOT NULL,
    rate_effective_date DATE NOT NULL, -- Historical rates support
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Indexes for Frequently Queried Columns
CREATE INDEX idx_users_email ON Users(email);
CREATE INDEX idx_products_name ON Products(name);
CREATE INDEX idx_categories_name ON Categories(name);
CREATE INDEX idx_orders_created_at ON Orders(created_at);
CREATE INDEX idx_orderdetails_order_id ON OrderDetails(order_id);
CREATE INDEX idx_cart_user_id ON Cart(user_id);
