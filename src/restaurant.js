function createRestaurant(restaurantName) {
  var restaurant = {}; // restaurant is an empty object, that can be filled
    restaurant.name = restaurantName; // accesses the name of the restaurant
    restaurant.menus = { // builds an object with values of empty arrays
      breakfast: [],
      lunch: [],
      dinner: []
    };
  return restaurant;
};

function addMenuItem(restaurant, menuItem) {
  if (menuItem.type === "breakfast" && restaurant.menus.breakfast.includes(menuItem) === false) {
    restaurant.menus.breakfast.push(menuItem);
  } else if (menuItem.type === "lunch" && restaurant.menus.lunch.includes(menuItem) === false ) {
  restaurant.menus.lunch.push(menuItem);
  } else if (menuItem.type === "dinner" &&  restaurant.menus.dinner.includes(menuItem) === false) {
    restaurant.menus.dinner.push(menuItem);
    }
  return menuItem
};


  function removeMenuItem( restaurant, removeMenuItem, menuItemType ) {
    if (restaurant.menus[menuItemType] !== undefined  ) {
      for (var i = 0; i < restaurant.menus[menuItemType].length; i++ ) {
          restaurant.menus[menuItemType].splice(i , 1 );
          return `No one is eating our ${removeMenuItem} - it has been removed from the ${menuItemType} menu!`
        }
  } if (!restaurant.menus[menuItemType].includes(removeMenuItem) ) {
      return `Sorry, we don't sell ${removeMenuItem}, try adding a new recipe!`;
    }
  };

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
