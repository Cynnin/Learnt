//(1) Functions Assignment
let fullName = (firstName = 'Chidimma', lastName = 'Jonnwakalo') => {
    console.log(`${firstName} ${lastName}`);
    return `${firstName} ${lastName}`;
};

console.log(fullName()); // Logs: Chidimma Jonnwakalo
console.log(fullName('Chisom', 'Nwakalo')); // Logs: Chisom Nwakalo

//(2) High Order Functions Assignment
const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Iceland', 'Ireland', 'Japan', 'Kenya'];
const names = ['Tamara', 'Mathias',
    'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: '' },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: ''}
];
//(2a) Use forEach to console.log each country in the countries array
countries.forEach(country => {
    console.log(country);
});
//(2b) Use forEach to console.log each name in the names array
names.forEach(name => {
    console.log(name);
});
//(2c) Use map to console.log each number in the numbers array
numbers.map(number => {
    console.log(number);
});
//(2d) Use map to create a new array by changing each country to uppercase in the countries array
const upperCaseCountries = countries.map(country => {
    return country.toUpperCase();
});
console.log(upperCaseCountries);
//(2e) Use map to create an array of countries length from countries array
const countriesLength = countries.map(country => {
    return country.length;
});
console.log(countriesLength);
//(2f) Use map to create a new array by changing each number to square in the numbers array
const squareNumbers = numbers.map(number => {
    return number * number;
});
console.log(squareNumbers);
//(2g) Use map to change each name to uppercase in the names array
const upperCaseNames = names.map(name => {
    return name.toUpperCase();
});
console.log(upperCaseNames);
//(2h) Use map to map the products array to its corresponding prices
const productPrices = products.map(product => {
    return product.price;
});
console.log(productPrices);
//(2i) Use filter to filter out countries containing ?(I'll use 'a' as an example)
const countriesWithA = countries.filter(country => {
    return country.includes('a');
});
console.log(countriesWithA);
//(2j) Use filter to filter out countries having six characters
const countriesWithSixChars = countries.filter(country => {
    return country.length === 6;
});
console.log(countriesWithSixChars);
//(2k) Use filter to filter out countries containing six letters and more in the countries array
const countriesWithSixOrMoreChars = countries.filter(country => {
    return country.length >= 6;
});
console.log(countriesWithSixOrMoreChars);
//(2l) Use filter to filter out countries starting with 'E'
const countriesStartingWithE = countries.filter(country => {
    return country.startsWith('E');
});
console.log(countriesStartingWithE);
//(2m) Use filter to filter out only prices with values
const productsWithPrice = products.filter(product => {
    return product.price !== '';
});
console.log(productsWithPrice);
//(2n) Declare a function called ? which returns an array of countries which have some common pattern (e.g. 'land', 'ia', 'island', stan)
const countriesWithPattern = (pattern) => {
    return countries.filter(country => {
        return country.includes(pattern);
    });
};
console.log(countriesWithPattern('land'));
console.log(countriesWithPattern('ia'));
console.log(countriesWithPattern('island'));
console.log(countriesWithPattern('stan'));

//(3) Objects Assignment
//(3a) Create an empty object called dog. Print the dog object on the console
const dog = {};
console.log(dog); // Logs: {}
//(3b) Add name, legs, colour, age, and bark properties for the dog object
dog.name = 'T.Rex';
dog.legs = 3;
dog.colour = 'Brown and White';
dog.age = 3;
dog.bark = () => {
    return 'Woof Woof';
};
console.log(dog); // Logs: { name: 'T.Rex', legs: 3, colour: 'Brown and White', age: 3, bark: [Function] }
//The bark property is a method that returns Get name, legs, colour, age, and bark value from the dog object
console.log(dog.name); // Logs: T.Rex
console.log(dog.legs); // Logs: 3
console.log(dog.colour); // Logs: Brown and White
console.log(dog.age); // Logs: 3
console.log(dog.bark()); // Logs: Woof Woof