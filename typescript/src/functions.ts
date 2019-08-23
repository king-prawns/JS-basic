// Named function
function add(x, y) {
  return x + y;
}

// Anonymous function
let myAdd1 = function(x, y) { return x + y; };

let z = 100;
function addToZ(x, y) {
    return x + y + z;
}

// Typing the function
function add(x: number, y: number): number {
  return x + y;
}
let myAdd2 = function(x: number, y: number): number { return x + y; };

// Writing the function type
let myAdd3: (x: number, y: number) => number = function(x: number, y: number): number { return x + y; };
let myAdd4: (baseValue: number, increment: number) => number = function(x: number, y: number): number { return x + y; };

// Inferring the types
// myAdd has the full function type
let myAdd5 = function(x: number, y: number): number { return  x + y; };
// The parameters 'x' and 'y' have the type number
let myAdd6: (baseValue: number, increment: number) => number = function(x, y) { return x + y; };

// Optional and Default Parameters
function buildName(firstName: string, lastName: string) {
  return firstName + " " + lastName;
}
let result1 = buildName("Bob");                  // error, too few parameters
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right

function buildNameB(firstName: string, lastName?: string) {
  if (lastName)
      return firstName + " " + lastName;
  else
      return firstName;
}
let result1B = buildNameB("Bob");                  // works correctly now
let result2B = buildNameB("Bob", "Adams", "Sr.");  // error, too many parameters
let result3B = buildNameB("Bob", "Adams");         // ah, just right

function buildNameC(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}
let result1C = buildNameC("Bob");                  // works correctly now, returns "Bob Smith"
let result2C = buildNameC("Bob", undefined);       // still works, also returns "Bob Smith"
let result3C = buildNameC("Bob", "Adams", "Sr.");  // error, too many parameters
let result4C = buildNameC("Bob", "Adams");         // ah, just right

// Rest Parameters
function buildNameD(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}
// employeeName will be "Joseph Samuel Lucas MacKinzie"
let employeeName = buildNameD("Joseph", "Samuel", "Lucas", "MacKinzie");

// This
let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function() {
      return function() {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);

          return {suit: this.suits[pickedSuit], card: pickedCard % 13};
      }
  }
}
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
alert("card: " + pickedCard.card + " of " + pickedCard.suit); // ERROR


let deck2 = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function() {
      // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
      return () => {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);

          return {suit: this.suits[pickedSuit], card: pickedCard % 13};
      }
  }
}
let cardPicker2 = deck2.createCardPicker();
let pickedCard2 = cardPicker();
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);

// this parameters
interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}
let deck3: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  // NOTE: The function now explicitly specifies that its callee must be of type Deck
  createCardPicker: function(this: Deck) {
      return () => {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);

          return {suit: this.suits[pickedSuit], card: pickedCard % 13};
      }
  }
}

let cardPicker3 = deck3.createCardPicker();
let pickedCard3 = cardPicker();
alert("card: " + pickedCard3.card + " of " + pickedCard3.suit);

// this parameters in callbacks
interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void;
}
class Handler {
  info: string;
  onClickBad(this: Handler, e: Event) {
      // oops, used `this` here. using this callback would crash at runtime
      this.info = e.message;
  }
}
let h = new Handler();
uiElement.addClickListener(h.onClickBad); // error!

class Handler2 {
  info: string;
  onClickGood(this: void, e: Event) {
      // can't use `this` here because it's of type void!
      console.log('clicked!');
  }
}
let h2 = new Handler2();
uiElement.addClickListener(h.onClickGood);

class Handler3 {
  info: string;
  onClickGood = (e: Event) => { this.info = e.message }
}

// Overloads
let suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);


let suits2 = ["hearts", "spades", "clubs", "diamonds"];
function pickCard2(x: {suit: string; card: number; }[]): number;
function pickCard2(x: number): {suit: string; card: number; };
function pickCard2(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck2 = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1B = myDeck[pickCard2(myDeck)];
alert("card: " + pickedCard1B.card + " of " + pickedCard1B.suit);

let pickedCard2B = pickCard2(15);
alert("card: " + pickedCard2B.card + " of " + pickedCard2B.suit);