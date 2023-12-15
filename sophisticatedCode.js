/* 
 * Filename: sophisticatedCode.js
 * Content: Complex code showcasing JavaScript design patterns and techniques
 * Author: John Doe
 */

// Module pattern: ShoppingCart
const ShoppingCart = (function() {
  let cart = [];

  function getCart() {
    return cart;
  }

  function addToCart(item) {
    cart.push(item);
    console.log(`${item} added to cart.`);
  }

  function removeFromCart(item) {
    cart = cart.filter((cartItem) => cartItem !== item);
    console.log(`${item} removed from cart.`);
  }

  function checkout() {
    console.log(`Total amount: $${calculateTotal()}`);
    console.log('Checkout completed.');
    clearCart();
  }

  function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
  }

  function clearCart() {
    cart = [];
    console.log('Cart cleared.');
  }

  return {
    getCart,
    addToCart,
    removeFromCart,
    checkout
  };
})();

// Observer pattern: WeatherStation
function WeatherStation() {
  this.observers = [];
}

WeatherStation.prototype = {
  addObserver: function(observer) {
    this.observers.push(observer);
  },
  removeObserver: function(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  },
  notifyObservers: function(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
};

function TemperatureDisplay() {
  this.temperature = '';
}

TemperatureDisplay.prototype = {
  update: function(data) {
    this.temperature = data;
    this.display();
  },
  display: function() {
    console.log(`Temperature: ${this.temperature}°C`);
  }
};

function HumidityDisplay() {
  this.humidity = '';
}

HumidityDisplay.prototype = {
  update: function(data) {
    this.humidity = data;
    this.display();
  },
  display: function() {
    console.log(`Humidity: ${this.humidity}%`);
  }
};

// Usage of Module pattern and Observer pattern
const shoppingCart = ShoppingCart;

shoppingCart.addToCart({ name: 'Laptop', price: 1200 });
shoppingCart.addToCart({ name: 'Phone', price: 800 });
shoppingCart.removeFromCart({ name: 'Laptop', price: 1200 });
shoppingCart.checkout();

const weatherStation = new WeatherStation();
const temperatureDisplay = new TemperatureDisplay();
const humidityDisplay = new HumidityDisplay();

weatherStation.addObserver(temperatureDisplay);
weatherStation.addObserver(humidityDisplay);

weatherStation.notifyObservers('25');
setTimeout(function() {
  weatherStation.notifyObservers('28');
}, 2000);

// ... (more code)