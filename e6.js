// Define two arrays of numbers
const numbers1 = [1, 2, 3, 4]; // Array of numbers 1 through 4
const numbers2 = [5, 6, 7, 8]; // Array of numbers 5 through 8

// Combine the two arrays into one array using the spread operator
const numbers = [...numbers1, ...numbers2]; // Resulting array: [1, 2, 3, 4, 5, 6, 7, 8]

// Define a function to square a number
const square = (num) => num * num; // Takes a number and returns its square

// Apply the square function to each element in the 'numbers' array
const squares = numbers.map(square); // Resulting array: [1, 4, 9, 16, 25, 36, 49, 64]

// Define a function to check if a number is even
const isEven = (num) => num % 2 === 0; // Returns true if the number is even, false otherwise

// Filter the 'squares' array to include only even squares
const evenSquares = squares.filter(isEven); // Resulting array: [4, 16, 36, 64]

// Destructure the first two even squares from the 'evenSquares' array
const [firstEvenSquare, secondEvenSquare] = evenSquares; // Extracts first two elements

// Log the results to the console
console.log(`Squares: ${squares}`); // Output all squared numbers
console.log(`Even squares: ${evenSquares}`); // Output only even squared numbers
console.log(`First even square: ${firstEvenSquare}, Second even square: ${secondEvenSquare}`); // Output the first and second even squares
