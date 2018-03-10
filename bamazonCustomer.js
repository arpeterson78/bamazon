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

connection.connect()

function loadProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log("\n");
        console.table(res);
        promptUser(res);
    })
}

function promptUser(inv) {


    inquirer.
        prompt([
            {
                type: "input",
                name: "product_id",
                message: "Please input the item ID for the product you would like to purchase: ",
                validate: function (answer) {
                    return !isNaN(answer);
                }
            }, {
                type: "input",
                name: "purchase_amount",
                message: "How much of this product would you like to purchase?",
                validate: function (answer) {
                    return !isNaN(answer);
                }
            }
        ]).then(function (answer) {
            var product = checkInventory(answer.product_id, inv);
            var quantity = productQuantity(product);

            var newQuantity = (quantity - answer.purchase_amount);

            if (answer.purchase_amount <= quantity) {
                connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: newQuantity
                        },
                        {
                            item_id: answer.product_id
                        }
                    ]
                )
                var cost = answer.purchase_amount * product.price;
                var dollarCost = cost.toFixed(2);
                console.log("\nThank you for your purchase! Your total cost is: $" + (dollarCost) + "\n");
                backToMainMenu();
            } else {
                console.log("\nSorry! Insufficient quantity.\n");
                backToMainMenu();
            }
        })


}

function checkInventory(choice, product) {
    var userChoice = choice;
    for (var i = 0; i < product.length; i++) {
        if (userChoice == product[i].item_id) {
            return product[i];

        }
    }

}

function productQuantity(quantity) {
    return quantity.stock_quantity;
}

function backToMainMenu() {
    inquirer.
        prompt([
            {
                type: "confirm",
                name: "reset",
                message: "Would you like to make another purchase?"
            }
        ]).then(function (answer) {
            if (answer.reset) {
                loadProducts();
            } else {
                connection.end();
            }
        })
}



loadProducts();