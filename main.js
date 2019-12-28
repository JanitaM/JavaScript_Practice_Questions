// JS Practice Questions (DON'T USE SORT())

/* 1) Write a function that returns the result of 5+6+7+8+9+10. */
const add = () => 5 + 6 + 7 + 8 + 9 + 10;
console.log(`1)`, add());


/* 2) Write a function that returns the perimeter of a rectangle with a width of 5 and a height of 8. */
const perimeter5and8 = () => (5 + 8) * 2;
console.log(`2)`, perimeter5and8());


/* 3) Write a new function that returns the perimeter of a rectangle with the width and height being specified as arguments to the function.  */
const perimeter = (w, h) => (w + h) * 2;
console.log(`3)`, perimeter(5, 8));

/* 4) Write a function that converts fahrenheit, given as an argument, to celcius. */
const fToC = f => (f - 32) * (5 / 9);
console.log(`4)`, fToC(5));


/* 5) Write a function that converts celcius, given as an argumen, to fahrenheit. */
const cToF = c => (c * 9) / 5 + 32;
console.log(`5)`, cToF(5));


/* 6) Write a function that calculates tip with 2 arguments, the bill and the tip percentage. Use the build-in JS toFixed() method to round the answer to two decimal places. */
const tipCalc = (bill, percent) => Number((bill * percent).toFixed(2));
console.log(`6)`, tipCalc(20, .20));


/* 7) Write a function that takes a number as an argument and returns the sum of each individual digit. So an input of 998 would return 26 (because 9 + 9 + 8) is 26. */
const sumOfDigits = num => {
  // add the string of numbers to an array 
  let arrayString = num.toString().split("");
  let arrayNum = [], total = 0;
  // convert each string to a number and save to arrayNum
  arrayString.forEach(string => arrayNum.push(parseInt(string)));
  // add each number to total
  arrayNum.forEach(num => total += num);
  return total;
}
console.log(`7)`, sumOfDigits(998));


/* 8) Write the same function above, but that takes an input from the built-in browser function, prompt(). */
const sumOfDigits2 = () => {
  let num = prompt("Enter a number");
  let arrayString = num.toString().split("");
  let arrayNum = [], total = 0;

  arrayString.forEach(string => arrayNum.push(parseInt(string)));

  arrayNum.forEach(number => total += number);
  return total;
};
// console.log(`8)`, sumOfDigits2());


/* 9) Write a function that takes an argument in seconds and specifies the equivalent number of years. */
// 1 year = 31556952 seconds
const secondsToYears = seconds => seconds / 31556952;
console.log(`9)`, secondsToYears(31556952));


/* 10) Write a function that returns the current date and time. */
const currentDateTime = () => new Date();
console.log(`10)`, currentDateTime());


/* 11) Write a function that returns the date 33 days from now. */
const plus33Days = () => {
  let msInDay = 86400000;
  let currentDate = new Date();

  return new Date(currentDate.getTime() + (msInDay * 33))
}
console.log(`11)`, plus33Days());


/* 12) Write a function that returns the mean of an array of numbers. */
// mean = sum / length;
const meanOfArr = arr => {
  let total = 0;

  arr.forEach(num => total += num);
  return total / arr.length;
};
console.log(`12)`, meanOfArr([9, 9, 8]));


/* 13) Write a function that randomly generates a number between 1 and 12, and returns the name of the corresponding month. (Hint: Look up how to get a random number in JavaScript.) */
const randomMonth = () => {
  let randomNumber = Math.floor(Math.random() * 12);
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

  return months[randomNumber];
}
console.log(`13)`, randomMonth());


/* 14) Write a function that takes three numbers as arguments, and returns the same 3 numbers in increasing order(more specifically, non - decreasing order if multiple numbers are the same).*/
//https://en.wikipedia.org/wiki/Sorting_algorithm#Popular_sorting_algorithms
//http://blog.benoitvallon.com/sorting-algorithms-in-javascript/sorting-algorithms-in-javascript/
const incSorted = (x, y, z) => {
  let arr = [];

  arr.push(x, y, z);

  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}
console.log(`14)`, incSorted(5, 22, 12));


/* 15) Write a function that returns the appropriate boolean value if a given string argument is a palindrome, where the string is the same when reversed.Examples of palindromes are "racecar" and "3003".
  Ex: isPalindrome("racecar") returns true. isPalindrome("racecars") returns false. */
const isPalindrome = string => {
  let reverse = "";

  for (let i = 0; i < string.length; i++) {
    reverse += string[i];
  }

  if (reverse === string) {
    return true;
  } return false;
}
console.log(`15)`, isPalindrome("racecar"));


/* 16) Write a function that returns true when two inputs are equivalent when using coercion, but not equivalent without coercion.
  Ex: isCoerced(5, "5") returns true. isCoerced(5, 5) returns false. isCoerced(4, "shoe") returns false. */
const isCoerced = (x, y) => {
  if (x === y) {
    return false;
  } else if (x == y) {
    return true;
  } return false;
}
console.log(`16)`, isCoerced(5, "5"));


/* 17) Write a function called isEven() that returns true if a given argument is even. */
const isEven = number => {
  if (number % 2 === 0) {
    return true;
  } return false;
}
console.log(`17)`, isEven(6));


/* 18) Write a function called isOdd() that returns true if a given argument is odd. Do this by only using the isEven() function you wrote previously. */
const isOdd = number => !isEven(number);
console.log(`18)`, isOdd(1));


/* 19) Write a function that returns true if a given argument is a multiple of 3. Examples of multiples of 3 are 0, 3, 6, 9 ... */
const multipleOf3 = number => {
  if (number % 3 === 0) {
    return true;
  } return false;
}
console.log(`19)`, multipleOf3(9));


/* 20) Write a function that takes two arguments.Check if the first argument is the multiple of the second argument.Return the appropriate boolean.
  Ex.checkMultiple(20, 5) returns true.checkMultiple(21, 5) returns false. */
const checkMultiple = (x, y) => {
  if (x % y === 0) {
    return true;
  } return false;
}
console.log(`20)`, checkMultiple(20, 5));


/* 21) Write a function that takes an array of numbers as an argument and returns the smallest number in the array.*/
const smallestNum = arr => {
  let numToCompare = arr.shift();

  for (let i of arr) {
    if (i <= numToCompare) {
      numToCompare = i;
    }
  }
  return numToCompare;
}
console.log(`21)`, smallestNum([5, 8, 11, 0, 2, -8]));


/* 22) Write a function that returns the largest integer n where n * n is still less than 12000. (Hint 1, use a while loop). (Hint 2, you don't need an argument). */
const largestInt = () => {
  let i = 0, arr = [];

  while ((i * i) <= 12000) {
    arr.push(i);
    i++
  }
  // return the last item saved to the array
  return arr.length - 1;
}
console.log(`22)`, largestInt());


/* 23) Write a function that returns the largest integer n where n * n is still less than a given argument.
  Ex.smallestN(5) would return 2, because 2 * 2 is 4, which is smaller than 5, but 3 * 3 is 9, which is larger than 5. */
const smallestN = num => {
  let i = 0, arr = [];

  while ((i * i) <= num) {
    arr.push(i);
    i++
  }
  return arr.length - 1;
}
console.log(`23)`, smallestN(5));


/* 24) Write a function that takes a string as an argument and returns the reverse of that string. */
const revString = string => {
  let reverse = "";

  for (let i = 0; i < string.length; i++) {
    reverse = string[i] + reverse;
  }
  return reverse;
}
console.log(`24)`, revString("This is a test"));


/* 25) Write a function that counts the occurences of a specific element in an array, specified as a function argument.
For example, for the array[5, 7, 12, 5, 3, 3, 5], the function countOccurences(3) would return a value of 2. */
const countOccurences = num => {
  let arr = [5, 7, 12, 5, 3, 3, 5];
  let arrCount = [];

  arr.forEach(item => {
    if (num === item) {
      arrCount.push(item);
    }
  });
  return arrCount.length;
}
console.log(`25)`, countOccurences(5));


/* 26) Write a function that returns a multidimensional array that contains number of occurences for every element of an array.
For example, for the array[5, 7, 12, 5, 3, 3, 5], the function countAllOccurences(array) would return: [[5, 3], [7, 1], [12, 1], [3, 2]] */
const countAllOccurences = arr => {
  let obj = {}, arrFinal = [];

  for (let i = 0; i < arr.length; i++) {
    // save the item as key and count as value in an object
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    // save each key-value pair to an array
    arrFinal = Object.keys(obj).map(key => [Number(key), obj[key]]);
  }
  return arrFinal;
}
console.log(`26)`, countAllOccurences([5, 7, 12, 5, 3, 3, 5]));

/* 27) Write a function that takes an array of numbers as an input, and checks to see if the array is sorted in non - decreasing order. (i.e.each element in the array is less than or equal to the next element.) */
const sortCheck = arr => {
  let check = arr.shift();

  for (let num in arr) {
    if (check <= num) {
      return `sorted`;
    } return `NOT sorted`;
  }
}
console.log(`27)`, sortCheck([5, 11, 0, -8, 3, 5]));
// console.log(`27)`, sortCheck([-8, 0, 3, 5, 5, 11]));


/* 28) Write a function that takes an array of numbers as an argument and sorts them in increasing order. */
//https://guide.freecodecamp.org/algorithms/sorting-algorithms/merge-sort/
const incOrder = arr => {
  // if the array has only one number, return the arr
  if (arr.length <= 1) {
    return arr;
  }
  // else split the array into two, assign the left and right side into their own array
  let middle = arr.length / 2;
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);
  // call the mergedArrs on the left and right side arrays and return the answer
  return mergedArrs(incOrder(left), incOrder(right));
}

const mergedArrs = (leftArr, rightArr) => {
  let result = [];
  // while there are values in the left or right array
  while (leftArr.length || rightArr.length) {
    // if there are values in the left or right array???
    if (leftArr.length && rightArr.length) {
      // if the first value in the left array is less than the first value in the right array
      if (leftArr[0] < rightArr[0]) {
        // add it to the result array
        result.push(leftArr.shift())
      } else {
        // if the right is less, add it to the result array
        result.push(rightArr.shift())
      }
    }
    // if there are values in only the left array, add it to the result array???
    else if (leftArr.length) {
      result.push(leftArr.shift())
    }
    // if there are values in only the right array, add it to the result array???
    else {
      result.push(rightArr.shift())
    }
  }
  return result;
}
console.log(`28)`, incOrder([5, 8, 11, 0, 2, -8]));


/* 29) Write a function that takes two sorted arrays of numbers as arguments, and returns one new sorted array containing the numbers from both of the arrays given as arguments. Call this function merge(). */
const merge = (arr1, arr2) => mergedArrs(arr1, arr2);
console.log(`29)`, merge([1, 5, 10], [2, 7]));


/* 30) Leibniz's formula can compute pi. the formula is given below:
pi = 4 * (1 - (1 / 3) + (1 / 5) - (1 / 7) + (1 / 9) - (1 / 11) + ...).
The elipsis(the three dots) means this pattern continues forever.
Notice that the operators(+ and - ) alternate each time.
Write a function called calculatePi(), that takes an argument that specifies the number of terms to calculate from (don't include the 4 in the count) with this formula and returns the value. For example if you said:
Ex.calculatePi(5) would return the result of the first 5 terms in the parentheses, meaning 1 through (1 / 9) in this case.
*/
const calculatePi = number => {
  let sum = 1, denom = 1, arr = [], subtotal = 0;

  // number dictates how many times to loop
  for (let i = 0; i < number; i++) {
    // loop through and add 2 to the denom on every iteration
    denom += 2;
    // value gets added or subtracted on every loop. 
    if (i % 2 === 0) {
      // if i is even, subtract 
      value = -(1 / denom);
    } else {
      // if i is odd, add 
      value = (1 / denom);
    }
    // each version gets save in an array
    arr.push(value);
  }
  // loop through arr and add the values together, save it to subtotal
  for (let num in arr) {
    subtotal += arr[num];
  }
  // add sum and subtotal
  sum = sum + subtotal;
  return 4 * sum;
}
console.log(`30)`, calculatePi(1));
// calculatePi(1) = 2.666666666666667;
// calculatePi(2) = 3.466666666666667;
// calculatePi(3) = 2.8952380952380956;