const promise = new Promise((resolve, reject) => {
  console.log("promise!!");
});

promise.then((result) => console.log(result));
