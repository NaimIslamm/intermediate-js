// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// function loadData() {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

// function loadusers() {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }
// onno site er api diye tar data amr website a show korano...........

// function loadData2() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => displayUser(data));
// }
// uporer fetch a jei function ta call korci oi function a shb dhoroner code kore rakhci..kivabe api theke data amr website a show korba with style--------------------

// function displayUser(data) {
//   const ul = document.getElementById("user-list");
//   const postContainer = document.getElementById("post-container");
//   //   eta upore set kora uchit loop er mddhe korle iteration hbe bar bar;
//   for (const user of data) {
//     console.log(user);
//     const li = document.createElement("li");
//     li.innerText = user.name;
//     ul.appendChild(li);

//     // div baniye seta style kore add korbo & dynamic data bosabo----
//     const div = document.createElement("div");
//     // classlist add korlam css likhew style kora jabe------
//     div.classList.add("use-div");
//     // abr js er mddhew css lekha jabe--------
//     div.style.fontSize = "30px";
//     div.style.display = "flex";
//     div.style.alignItems = "center";
//     div.style.gap = "20px";
//     div.innerHTML = `<h4>User:${user.name}</h4>
//     <h5>Name:${user.username}</h5>
//     <p>Address:${user.address.city}</p>`;

//     postContainer.appendChild(div);
//   }
// }
// async await diye function-------------------------------------------------------

// const loadData3 = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/comments");
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log("data load error");
//   }
// };
