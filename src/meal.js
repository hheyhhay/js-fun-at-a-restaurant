function nameMenuItem(menuItemName) {
  var name = `Delicious ${menuItemName}`
  return name;
};

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type
  }
  return menuItem;
};

function addIngredients(foodItem, ingredients) {
  if (ingredients.includes(foodItem) === false ) {
    ingredients.push(foodItem); }
    return ingredients;
};

function formatPrice(initialPrice) {
  var dollarSign = `$${initialPrice}`;
  return dollarSign;
};

function decreasePrice(decreasedPrice) {
  var tenPercentDiscount = decreasedPrice*.9;
  return tenPercentDiscount;
};


function createRecipe(title, ingredients, menuItemType) {

  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
    }
  return recipe;
};
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
