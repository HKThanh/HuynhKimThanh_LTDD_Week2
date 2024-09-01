// 27. Create a function that will receive an array of numbers as argument and will
// return a new array with distinct elements
function distinctArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// console.log(distinctArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3]));
// 28. Calculate the sum of first 100 prime numbers and return them in an array
let isPrime = (numbers) => {
    if (numbers < 2) return true;
    for (let i = 2; i <= Math.sqrt(numbers); i++) {
        if (numbers % i === 0)
            return false;
    }

    return true;
}

let first100PrimeNumbers = () => {
    let i = 0;
    let array = [];
    while (i <= 100) {
        if (isPrime(i))
            array.push(i);
        i++;
    }
    return array;
}
// let result = first100PrimeNumbers();
// console.log(result);
// let sum = first100PrimeNumbers().reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(`Sum of first 100 prime numbers: ${sum}`);
// 29. Print the distance between the first 100 prime numbers
let distanceBetweenFirst100PrimeNum = () => {
    let primeNumbers = first100PrimeNumbers();
    let length = primeNumbers.length;
    let distance = [];
    for (let i = 0; i < length - 1; i++) {
        distance.push(primeNumbers[i + 1] - primeNumbers[i]);
    }
    return distance;
}

// let result = distanceBetweenFirst100PrimeNum();
// console.log(result);
// 30. Create a function that will add two positive numbers of indefinite size. The
// numbers
// are received as strings and the result should be also provided as string.
function add(a, b) {
    let sum = '';
    let carry = 0;
    let length = Math.max(a.length, b.length);
    a = a.padStart(length, '0');
    b = b.padStart(length, '0');
    for (let i = length - 1; i >= 0; i--) {
        let digitSum = parseInt(a[i]) + parseInt(b[i]) + carry;
        if (digitSum > 9) {
            carry = 1;
            digitSum -= 10;
        } else {
            carry = 0;
        }
        sum = digitSum + sum;
    }
    if (carry) {
        sum = carry + sum;
    }
    return sum;
}

// console.log(add('129', '00123'));
// 31. Create a function that will return the number of words in a text
function countWords(text) {
    return text.split(' ').length;
}

// console.log(`Numbers of words in the text: ${countWords('Hello World!')}`);
// 32. Create a function that will capitalize the first letter of each word in a text
function capitalizeFirstLetter(text) {
    let words = text.split(' ');
    let capitalizedWords = words.map(word => word[0].toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
}

// console.log(capitalizeFirstLetter('hello world!'));
// 33. Calculate the sum of numbers received in a comma delimited string
function sumOfNumbers(str) {
    let numbers = str.split(',');
    return numbers.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue), 0);
}

// console.log(sumOfNumbers('1,2,3,4,5,6,7,8,9,10'));
// 34. Create a function that returns an array with words inside a text.
function wordsInText(text) {
    return text.split(' ');
}

// console.log(wordsInText('Hello World!'));
// 35. Create a function to convert a CSV text to a “bi-dimensional” array
function csvToArray(text) {
    let rows = text.split('\n');
    return rows.map(row => row.split(','));
}

// console.log(csvToArray('1,2,3\n4,5,6\n7,8,9'));
// 36. Create a function that converts a string to an array of characters
function stringToArray(text) {
    return text.split('');
}

// console.log(stringToArray('Hello World!'));
// 37. Create a function that will convert a string in an array containing the ASCII codes
// of each character
function stringToAscii(text) {
    return text.split('').map(char => char.charCodeAt(0));
}

// console.log(stringToAscii('Hello World!'));
// 38. Create a function that will convert an array containing ASCII codes in a string
function asciiToString(arr) {
    return arr.map(code => String.fromCharCode(code)).join('');
}

// console.log(asciiToString([72, 101, 108, 108, 111]));
// 39. Implement the Caesar cypher
function caesarCipher(text, shift) {
    return text.split('').map(char => {
        let code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            code = 65 + ((code - 65 + shift) % 26);
        } else if (code >= 97 && code <= 122) {
            code = 97 + ((code - 97 + shift) % 26);
        }
        return String.fromCharCode(code);
    }).join('');
}

console.log(caesarCipher('Hello World!', 3));
// 40. Implement the bubble sort algorithm for an array of numbers
// 41. Create a function to calculate the distance between two points defined by their x,
//     y
// coordinates
// 42. Create a function that will return a Boolean value indicating if two circles
// defined by center coordinates and radius are intersecting
// 43. Create a function that will receive a bi-dimensional array as argument and a
// number and will extract as a unidimensional array the column specified by the
// number
// 44. Create a function that will convert a string containing a binary number into a
// number
// 45. Create a function to calculate the sum of all the numbers in a jagged array
// (contains numbers or other arrays of numbers on an unlimited number of
// levels)
// 46. Find the maximum number in a jagged array of numbers or array of numbers
// 47. Deep copy a jagged array with numbers or other arrays in a new array
// 48. Create a function to return the longest word in a string
// 49. Shuffle an array of strings
// 50. Create a function that will receive n as argument and return an array of n
// random numbers from 1 to n. The numbers should be unique inside the array.