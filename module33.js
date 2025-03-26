// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// function loadData() {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

// onno site er api diye tar data amr website a show korano...........

function loadData2() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUser(data));
}

function displayUser(data) {
  const ul = document.getElementById("user-list");
  const postContainer = document.getElementById("post-container");
  //   eta upore set kora uchit loop er mddhe korle iteration hbe bar bar;
  for (const user of data) {
    console.log(user);
    const li = document.createElement("li");
    li.innerText = user.name;
    ul.appendChild(li);

    // div baniye seta style kore add korbo & dynamic data bosabo----
    const div = document.createElement("div");
    div.classList.add("use-div");
    div.innerHTML = `<h4>User:${user.name}</h4>
    <h5>Name:${user.username}</h5>
    <p>Address:${user.address.city}</p>`;

    postContainer.appendChild(div);
  }
}
