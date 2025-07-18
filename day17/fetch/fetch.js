async function fetchMultiple() {
  const [user, posts] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/2").then((res) =>
      res.json()
    ),
    fetch("https://jsonplaceholder.typicode.com/posts?userId=2").then((res) =>
      res.json()
    ),
  ]);
  console.log("user", user); // obj
  console.log("posts", posts); // array
  document.querySelector("#output").innerHTML = `<h2>${user.name}</h2>`;
}

fetchMultiple();
