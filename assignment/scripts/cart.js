console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
let item;
const maxItems = 5;


function addItem(item) {
    if(isFull() === false) {
        basket.push(item);
        return true;
    } // add item
  else {
    console.log('Item could not be added to basket as basket is full.');
    return false;
  }
}


function listItems() {
    console.log('The current items in basket are:')
    for (i=0; i<basket.length; i++) {
        console.log(basket[i]);
    }
}

function empty() {
    basket = [];
    return "Your basket is now empty";
}


console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);

/// stretch goals



function isFull() {
    if (basket.length >= maxItems) {
        return true;
    } // end true
    else {
        return false;
    }
 }

 function removeItem(item) {
    let index = basket.indexOf(item);
    if (index === -1) {
        return null;
    }
    return basket.splice(index, 1)[0];
 }

 

 




// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
