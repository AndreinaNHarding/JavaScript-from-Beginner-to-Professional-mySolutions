//Solution to the chapter project exercise "Company Product Catalog" from JavaScript from Beginner to Professional 

/* In this project you would implement a data structure for a product and create queries to retrieve data */

//Create an array to hold an inventory of store items
const inventory = [];

//Create 3 items, each having properties.
const product1 = 
{
name: "Sofa" ,
model: "MDF-8",
cost: 600,
quantity: 30
};

const product2 = 
{
name: "Lamp",
model: "MDX - 35",
cost: 60,
quantity: 10
};

const product3 = 
{
name: "Desk",
model: "MDT - 45",
cost: 250,
quantity: 8
};

//Add 3 objects to the array:
inventory.push(product1, product2, product3);
console.log(inventory);

//Access the quantity element of your third item and log it to the console
console.log("quantity: ", inventory[2].quantity);
