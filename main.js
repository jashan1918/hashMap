import HashMap from "./hashMap.js";

const test = HashMap();

//this fills the hashmap 75% (full capacity)
 test.set('apple', 'red')
 test.set('banana', 'yellow')
 test.set('carrot', 'orange')
 test.set('dog', 'brown')
 test.set('elephant', 'gray')
 test.set('frog', 'green')
 test.set('grape', 'purple')
 test.set('hat', 'black')
 test.set('ice cream', 'white')
 test.set('jacket', 'blue')
 test.set('kite', 'pink')
 test.set('lion', 'golden')

//overwriting some enteries
test.set('apple', 'green')
test.set('dog', 'white')

//going over the limit 0.75
test.set('moon', 'silver')

//updating an entry after size increase
test.set('apple', 'gold')

console.log(test.get("apple"));
console.log(test.has("apple"));
console.log(test.remove('apple'));
console.log(test.length());
// test.clear();
console.log(test.keys());
console.log(test.values());
console.log(test.entries());