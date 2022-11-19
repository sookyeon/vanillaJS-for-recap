//1. html에 미리 시계, 날짜 요소 세팅 후 불러오기
//2. 일정 텀마다 시간, 날짜를 불러오는 함수
//3. 함수 실행
const clock = document.getElementById("clock");
const calender = document.getElementById("calender");
//const calender = document.getElementById("calender");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 60000);

function getCalender() {
  const newDate = new Date();
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  const month = newDate.getMonth() + 1;
  const date = newDate.getDate();
  const day = days[newDate.getDay() - 1];
  calender.innerText = `${month}월 ${date}일 (${day})`;
}

getCalender();
setInterval(getCalender, 86400);
