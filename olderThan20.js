// Write a function that function should return person details 
// who is olderthan 20.

const peopleDetails = [
  {
    name: "Alice",
    phone: "9876543210",
    age: 25,
    address: "123 Elm Street, Springfield"
  },
  {
    name: "Diana",
    phone: "9876543210",
    age: 42,
    address: "123 Elm Street, Springfield"
  },
  {
    name: "Bob",
    phone: "9876543210",
    age: 35,
    address: "123 Elm Street, Springfield"
  },
  {
    name: "Charlie",
    phone: "9876543210",
    age: 19,
    address: "789 Pine Road, Gotham City"
  },
  {
    name: "Frank",
    phone: "9876543210",
    age: 37,
    address: "789 Pine Road, Gotham City"
  }
];

const isOlderThan = function (limitAge) {
  return function (person) {
    return person.age > limitAge;
  }
}

const peopleAgeAbove20 = function (peopleDetails) {
  return peopleDetails.filter(isOlderThan(20));
}

console.log(peopleAgeAbove20(peopleDetails));