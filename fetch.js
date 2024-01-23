fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch(function (error) {
    console.log("Error", error);
  });

//Task 1
// Make a GET request to the JSONPlaceholder API to fetch a list of posts. Log the result to the console.

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "GET",
})
  .then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Request Failed with status code:" + response.status);
    }
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log("Error:", error);
  });

//Task 3

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    if (data.length > 0) {
      const users = data;

      const userList = document.createElement("ul");
      users.forEach((user) => {
        const listItem = document.createElement("li");
        listItem.innerText = user.username;
        userList.appendChild(listItem);
      });

      const userListContainer = document.getElementById("userListContainer");
      userListContainer.appendChild(userList);
    }
  });

//Post Task

document.getElementById("formv1").addEventListener("submit", function (e) {
  e.preventDefault();

  //Fetching data from the fields.

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const website = document.getElementById("website").value;

  //create a user object

  const newUser = {
    name: name,
    email: email,
    website: website,
  };

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("network response was not Ok");
      }
      return response.json();
    })
    .then((data) => {
      const resultData = document.getElementById("result");
      resultData.innerHTML = `<h2> New User has been created</h2>
    <p>Name: ${data.name}</p>
    <p>Email: ${data.email}</p>
    <p>Website: ${data.website}</p>`;
    })
    .catch((error) => {
      console.error("There was problem with the fetch operation:", error);
    });
});
