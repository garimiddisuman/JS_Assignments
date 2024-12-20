// There are two arrays. The first array consisting of countries, 
// the second array consisting of the corresponding capitals. 
// Write a function that can take a country and return its respective capital.

const countriesAndCapitals = [
  { country: "India", capital: "New Delhi" },
  { country: "United States", capital: "Washington D.C." },
  { country: "France", capital: "Paris" },
  { country: "Japan", capital: "Tokyo" },
  { country: "Brazil", capital: "Brasília" },
  { country: "Australia", capital: "Canberra" },
  { country: "Germany", capital: "Berlin" },
  { country: "Canada", capital: "Ottawa" },
  { country: "Italy", capital: "Rome" },
  { country: "South Korea", capital: "Seoul" }
];

const capitalOf = function (countryName) {
  const countryData = countriesAndCapitals.find(
    function (countryAndCapital) {
      return countryAndCapital.country === countryName;
    });

  return countryData.capital;
};

console.log(capitalOf('India'));