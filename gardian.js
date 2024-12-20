// Given a list of 10 such person records, write a function to find the
//  **names and ages of guardians** 
// for people older than 20 years. Only include guardians whose names appear 
// in the list of people. Guardians not present in the list should be excluded.

const peopleData = [
  {
    name: "Aarav",
    phone: 9876543210,
    age: 25,
    address: "123 MG Road, Mumbai",
    guardian: { name: "Rohan", phone: 5432109876 }
  },
  {
    name: "Ananya",
    age: 35,
    phone: 8765432109,
    address: "456 Brigade Road, Bengaluru",
    guardian: { name: "Lakshmi", phone: 822345678 }
  },
  {
    name: "Ishaan",
    age: 19,
    phone: 7654321098,
    address: "789 Park Street, Kolkata",
    guardian: { name: "Aarav", phone: 876543210 }
  },
  {
    name: "Meera",
    age: 42,
    phone: 6543210987,
    address: "101 Connaught Place, Delhi",
    guardian: { name: "Sunita", phone: 8423456783 }
  },
  {
    name: "Rohan",
    age: 28,
    phone: 5432109876,
    address: "202 Marine Drive, Chennai",
    guardian: { name: "Lakshmi", phone: 765432109 }
  },
  {
    name: "Priya",
    age: 31,
    phone: 4321098765,
    address: "303 Sarjapur Road, Hyderabad",
    guardian: { name: "Geeta", phone: 623456785 }
  },
  {
    name: "Kavya",
    age: 18,
    phone: 3210987654,
    address: "404 Carter Road, Pune",
    guardian: { name: "Aditya", phone: 2109876543 }
  },
  {
    name: "Aditya",
    age: 45,
    phone: 2109876543,
    address: "505 Residency Road, Ahmedabad",
    guardian: { name: "Vimala", phone: 8823456787 }
  },
  {
    name: "Naina",
    age: 23,
    phone: 1098765432,
    address: "606 MG Road, Jaipur",
    guardian: { name: "Meera", phone: 543210987 }
  },
  {
    name: "Veer",
    age: 37,
    phone: 1987654321,
    address: "707 Lodhi Road, Chandigarh",
    guardian: { name: "Rajesh", phone: 8723456786 }
  }
];

const isOlderThan = function (limitAge) {
  return function (person) {
    return person.age > limitAge;
  }
};

const getGuardianName = function (person) {
  return person.guardian.name;
};

const isGuardianInList = function (guardiansList, guardian) {
  const object = {};

  peopleData.find(function (person) {
    if (person.name === guardian) {
      object.name = person.name;
      object.age = person.age;
      guardiansList.push(object);
      return object;
    }
  });

  return guardiansList;
};

const peopleOlderThan20 = peopleData.filter(isOlderThan(20));
const guardians = peopleOlderThan20.map(getGuardianName);
const guardiansDetails = guardians.reduce(isGuardianInList, []);

console.log(guardiansDetails);