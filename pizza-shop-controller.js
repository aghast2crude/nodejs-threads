const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./DrinkMachine");

const pizzashop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzashop.on("order-pizza", (size, topping) => {
  console.log(`Pizza of ${size} with ${topping} is ordered!`);
  drinkMachine.serveDrink(size);
});
pizzashop.order("large", "mushroom");
pizzashop.displayOrderNumber();
