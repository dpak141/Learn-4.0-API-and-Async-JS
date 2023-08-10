let getImageEl = document.getElementById("img");
let getAuthor = document.getElementById("author");
let getCrypto = document.getElementById("crypto-top");
let getCryptoDetail = document.getElementById("crypto");
let timeEl = document.getElementById("time");
let weatherEl = document.getElementById("weather");

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
    //report the error
  });

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  .then((res) => {
    if (!res.ok) {
      throw Error("Something went wrong");
    }
    return res.json();
  })
  .then((data) => {
    console.log(data.image.small);
    getCrypto.innerHTML = `
      <img src=${data.image.small} />
      <span>${data.name}</span>
    `;

    getCryptoDetail.innerHTML += `
    <p>🎯$${data.market_data.current_price.usd}</p>
    <p>👆$${data.market_data.high_24h.usd}</p>
    <p>👇$${data.market_data.low_24h.usd}</p>
    `;
  })

  .catch((err) => console.log(err));

function updateTime() {
  const date = new Date();
  timeEl.textContent = date.toLocaleTimeString("en-us", { timeStyle: "short" });
}
setInterval(updateTime, 1000);

navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
});

navigator.geolocation.getCurrentPosition((position) => {
  fetch(
    `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`
  )
    .then((res) => {
      if (!res.ok) {
        throw Error("Weather data not avilable");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      console.log(iconUrl);

      console.log(data.main.temp);
      console.log(data.name);
      weatherEl.innerHTML = `
           <img src=${iconUrl} />
           <p class="weather-temp">${Math.round(data.main.temp)}°</p>
           <p class="weather-city">${data.name}</p>
      `;
    })
    .catch((err) => console.error(err));
});

// https://apis.scrimba.com/openweathermap/data/2.5/weather
