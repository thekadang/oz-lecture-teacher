console.log("객체 실습");

const person = {
  name: {
    firstName: "Gildong",
    lastName: "Hong",
  },
  age: 20,
  isAdult: true,
  printInfo: function () {
    console.log("printInfo");
  },
};
console.log(person);

// person의 age, isAdult 조회
console.log("객체에서 . 사용하여 접근");
let age = person.age;
console.log("age :", age);
let isAdult = person.isAdult ? "성인" : "미성년자";
console.log("isAdult :", isAdult);

console.log("객체에서 [key] 사용하여 접근");
let age2 = person["age"];
console.log("age2 :", age2);
let isAdult2 = person["isAdult"] ? "성인" : "미성년자";
console.log("isAdult2 :", isAdult2);
