//1. 사용자의 위치정보를 알아내는 함수 사용
//2. 위치 정보를 토대로 하는 날씨 정보 api를 받아오기
//3. 그 data 객체를 fetch를 이용해 js에 받아오고 우리가 원하는 정보를 변수로 선언
//4. 추출한 변수를 html 요소에 입히기
const nameContainer = document.querySelector(
  "#weatherContainer .nameContainer"
);
const tempContainer = document.querySelector(
  "#weatherContainer .tempContainer"
);
const weatherContainer = document.querySelector(
  "#weatherContainer .weatherContainer"
);

function onSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const api = "1d689ace767f27dd814450b0aa849123";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temp = Math.floor(data.main.temp);
      const name = data.name;
      const weather = data.weather[0].main;
      nameContainer.innerText = `${name}`;
      tempContainer.innerText = `${temp}°`;
      weatherContainer.innerText = `${weather}☁️`;
    });
}

function onError() {
  alert("Can't get your current location");
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);
