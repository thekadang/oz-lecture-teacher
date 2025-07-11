// map
// let numbers = [1, 2, 3];

// numbers에 있는 모든 숫자 값을 2배로 하고싶다.
// let newNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   const num = numbers[i];
//   newNumbers.push(num * 2);
// }
// numbers = newNumbers;

// function double(num) {
//   return num * 2;
// }
// let newNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   const num = numbers[i];
//   newNumbers.push(double(num));
// }
// numbers = newNumbers;
// console.log(numbers);

let numbers = [1, 2, 3];
numbers = numbers.map((num) => {
  return num * 2;
});
console.log(numbers);
