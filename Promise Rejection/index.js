let getImageEl = document.getElementById("img");
let getAuthor = document.getElementById("author");

fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.urls.regular);
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    getAuthor.textContent = `By: ${data.user.name}`;
  })
  .catch((err) => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/uploads/1412026095116d2b0c90e/3bf33993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTE1NDM3NzB8&ixlib=rb-4.0.3&q=80&w=1080)`;
  });
