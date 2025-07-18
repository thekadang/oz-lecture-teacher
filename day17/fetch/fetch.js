async function fetchMultiple() {
  const [posts, users] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json()
    ),
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json()
    ),
  ]);

  console.log(posts.length);
  console.log(users.length);
  //   console.log("post.title", post.title);
  //   console.log("user.name", user.name);
}

fetchMultiple();
