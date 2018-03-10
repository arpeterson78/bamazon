var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "#Chicken1378@_",
    database: "bamazon_db"
});

connection.connect();

function openingMenu() {
    inquirer.
        prompt([
            {
                type: "list",
                name: "products",
                message: "What would you like to do?",
                choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
            }

        ]).then(function (answer) {
            if (answer.products === "View Products for Sale") {
                loadProducts();
            } else if (answer.products === "View Low Inventory") {
                lowInventory();
            } else if (answer.products === "Add to Inventory") {
                addToInventory();
            } else {
                console.log("hello");
                connection.end();
            }
        })
}

function loadProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log("\n");
        console.table(res);
        backToMainMenu();
    })
}

function lowInventory() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        var lowItems = [];
        for (var i = 0; i < res.length; i++) {
            if (res[i].stock_quantity < 5) {
                lowItems.push(res[i]);
            }
        }
        if (lowItems.length > 0) {
            console.log("\nBelow is a list of the products that have a low inventory: \n");
            console.table(lowItems);
            backToMainMenu();
        } else {
            console.log("\nThere are currently no products that are low on inventory.\n");
            backToMainMenu();
        }
    });
   
}

function addToInventory() {

    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log("\n");
        console.table(res);

        inquirer.
            prompt([
                {
                    type: "input",
                    name: "product",
                    message: "What item id would you like to purchase more stock of?"

                }, {
                    type: "input",
                    name: "quantity",
                    message: "How many would you like to purchase?"
                }
            ]).then(function (answer) {

                var userChoice = res[answer.product - 1];

                var purchaseQuantity = parseInt(answer.quantity);

                var totalStock = parseInt(userChoice.stock_quantity + purchaseQuantity);

                connection.query(
                    "UPDATE products SET ? WHERE?",
                    [
                        {
                            stock_quantity: totalStock
                        },
                        {
                            item_id: userChoice.item_id
                        }
                    ],
                    function (error) {
                        if (error) throw error;
                        var cost = userChoice.price * purchaseQuantity;
                        var dollarCost = cost.toFixed(2);
                        console.log("\nPurchase placed! Your total cost is: $" + dollarCost + "\n");
                        backToMainMenu();
                    }
            
                );
               
                
            })
    })
}

// function newProdcut() {
//     inquirer.
//         prompt([
//             {

//             }
//         ])
// }

// function confirmPurchase() {
//     inquirer.
//         prompt([
//             {
//                 type: "confirm",
//                 name: "reset",
//                 message: 
//             }
//         ])
// }

function backToMainMenu() {
    inquirer.
        prompt([
            {
                type: "confirm",
                name: "reset",
                message: "would you like to return to the main menu?"
            }
        ]).then(function (answer) {
            if (answer.reset) {
                openingMenu();
            } else {
                connection.end();
            }
        })
}

openingMenu();



