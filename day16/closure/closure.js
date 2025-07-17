// 전역변수와 지역변수

let globalVar = "I am global";

function myFunction() {
  let localVar = "I am local";
  console.log(globalVar);
  console.log(localVar);
}
myFunction();

console.log(globalVar);
console.log(localVar);
