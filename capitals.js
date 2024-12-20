
const capital = function (country) {
  const countries = ["India", "United States", "France", "Japan", "Brazil", "Australia", "Germany", "Canada", "Italy", "South Korea"];

  const capitals = ["New Delhi", "Washington, D.C.", "Paris", "Tokyo", "Brasília", "Canberra", "Berlin", "Ottawa", "Rome", "Seoul"];

  const indexOfCountry = countries.indexOf(country);
  return capitals.at(indexOfCountry);
};

console.log(capital('India'));
console.log(capital('South Korea'));
console.log(capital('Japan'));