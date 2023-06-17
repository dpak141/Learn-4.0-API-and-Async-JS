let get = document.getElementById("get");
get.addEventListener("click", function () {
  fetch("https://www.boredapi.com/api/activity")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.body.classList.add("fun");
      document.getElementById("activity").textContent = data.activity;
      document.getElementById("happy").textContent = "😃Happy Bot😃";
    });
});
