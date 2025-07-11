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
let age = person.age;
console.log("age :", age);
let isAdult = person.isAdult ? "성인" : "미성년자";
console.log("isAdult :", isAdult);
