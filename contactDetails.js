// Write a function that should return personName, 
// phone, guardian, gardain phone, who's younger than 30.

const personDetails = [
  {
    name: "Aarav",
    phNo: "9876543210",
    age: 25,
    address: "123 MG Road, Mumbai",
    guardian: { name: "Suresh", phNo: "9123456780" }
  },
  {
    name: "Ananya",
    phNo: "9876543210",
    age: 35,
    address: "456 Brigade Road, Bengaluru",
    guardian: { name: "Lakshmi", phNo: "8223456781" }
  },
  {
    name: "Ishaan",
    phNo: "7654321098",
    age: 19,
    address: "789 Park Street, Kolkata",
    guardian: { name: "Ramesh", phNo: "8323456782" }
  }
];

const isOlderThan = function (limitAge) {
  return function (person) {
    return person.age > limitAge;
  }
};

const invert = function (limitAge) {
  return function (person) {
    return !isOlderThan(limitAge)(person);
  }
};

const getContacts = function (person) {
  return [person.name, person.phNo, person.guardian.name, person.guardian.phNo];
};

const contacts = function (peopleDetails) {
  return peopleDetails.filter(invert(30)).map(getContacts);
};

console.log(contacts(personDetails));