DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INT,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toothbrush", "Oral Care", 8.49, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toothpaste", "Oral Care", 5.49, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sweat Pants", "Clothing", 29.95, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("T-Shirt", "Clothing", 19.95, 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Steak", "Meat", 16.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chicken", "Meat", 8.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Laundry Detergent", "Laundry", 14.49, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dryer Sheets", "Laundry", 8.95, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Potato Chips", "Snacks", 5.49, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pretzels", "Snacks", 5.99, 100);