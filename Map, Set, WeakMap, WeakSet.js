Topics => Map, Set, WeakSet, WeakMap..

the difference between Map and Set is ... set and map both DS are unique that is no element can be repeated
but if we add(repeated-Value) in set in cannot change it and the other side map will update the value of key..

SEt... A Set is a collection of items that are unique i.e no element can be repeated...
Check Prototypes in console if you want to know about properties of (Set) DataStructure...
let newArr = [1, 2, 3, 4];
let obj = new Set(newArr);
console.log(obj.add(3));
console.log(obj.delete(1));
obj.add(["name:chouhan"]);
console.log(obj);

Map()... Map is a collection of elements where each element is stored as a Key, value pair.
 Map objects can hold both objects and primitive values as either key or value.
When we iterate over the map object it returns the key, and value pair in the same order as inserted.
let data = [
  [1, "ayaad"],
  [2, 22],
];
let newMap = new Map(data);
newMap.set(2, 23)
newMap.set(3, "jodhpur")
console.log(newMap.get(1));
newMap.forEach( (key, value) => {
    console.log(value, key)
});

WeakSet()... WeakSet is used to store a collection of objects.it cannot be iterated..
It adapts the same properties of that of a set i.e. does not store duplicates...
let obj = {
  name: "khan",
  faculty: "BCA",
};
let ws = new WeakSet();
let ob2 = { roll: "007" };
ws.add(ob2);
ws.add(obj);
console.log(ws);
console.log(ws.has(obj));

WeakMap...JavaScript WeakMap object in JavaScript is used to store the collection of objects (key-value pairs) in which keys are weakly referenced.
let ob1 = new WeakMap();
let obj1 = {};
let obj2 = {};
ob1.set(obj1, 22)
ob1.set(obj2, 23)

console.log(ob1.has(obj3));