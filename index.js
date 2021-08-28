// Code your solutions in this file

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGift(gift) {
//   console.log(`Wrapped ${gift} and added a bow!`);
// }


// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
//   }
//   const gifts = ["teddy bear", "drone", "doll"];



// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);
// id='text'

var names =['Lisa', 'Kaitlin', 'Jan' ];
        let text = "surprise";
        let newArray = [];

function writeCards() {
    for (let i=0; i < names.length ; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${text} gift!`)
}
return newArray
}
function countDown() {
    for (let a = 10; a >= 0; a--) {
        console.log (a);
    }
}