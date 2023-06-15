// Section Global Variables

const iceCream = [{
  name: 'Cookie Dough',
  price: 1.25,
  quantity: 0
}, {
  name: 'Vanilla',
  price: 1,
  quantity: 0
}, {
  name: 'Strawberry',
  price: 1.25,
  quantity: 0
}]

const toppings = [{
  name: 'Sprinkles',
  price: .25,
  quantity: 0
}, {
  name: 'Chocolate Chips',
  price: .25,
  quantity: 0
}]

const containers = [{
  name: 'Waffle Cone',
  price: 2,
  quantity: 0
}, {
  name: 'Waffle Bowl',
  price: 4,
  quantity: 0
}]




// Section Functions

// function addVanillaScoop() {
//   // console.log('this shows in console');

//   // write a function to find the name of the ice cream in the array
//   let vanillaScoop = iceCream.find(iceCream => iceCream.name == 'Vanilla')
//   // console.log(vanillaScoop);
//   // next increase the number of scoops 
//   vanillaScoop.quantity++

//   console.log(vanillaScoop);

// }

// make function for cookie dough

// function addCookieDoughScoop() {
//   // console.log('this is cookie dough');

//   let cookieDoughScoop = iceCream.find(iceCream => iceCream.name == 'Cookie Dough')
//   // console.log(cookieDoughScoop);

//   cookieDoughScoop.quantity++

//   console.log(cookieDoughScoop);

// }

// function addStrawberryScoop() {
//   // console.log(addStrawberryScoop);
//   let strawberryScoop = iceCream.find(iceCream => iceCream.name == 'Strawberry')

//   strawberryScoop.quantity++

//   console.log(strawberryScoop);

// }

// function addSprinkles() {
//   let extraSprinkles = toppings.find(toppings => toppings.name == 'Sprinkles')
//   extraSprinkles.quantity++
//   console.log(extraSprinkles);
// }


function addItemToBasket(itemName, type) {
  console.log(itemName);
  if (type == 'iceCream') {
    let sweet = iceCream.find(iceCream => iceCream.name == itemName)
  } else if (type == 'toppings') {
    let top = toppings.find(toppings => toppings.name == itemName)
  }
  else (type == 'containers'); {
    let cone = containers.find(containers => containers.name == itemName)
  }
  // console.log('this is item to basket');
}

function drawBasket() {
  let stringOfBasketItemHTML = ''

  iceCream.forEach(iceCream => {
    if (iceCream.quantity > 0)
  })

}

