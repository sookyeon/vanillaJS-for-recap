//1. html 요소 불러오기
const loginForm = document.getElementById("loginForm");
const loginInput = document.querySelector("#loginForm .loginInput");
const loginButton = document.querySelector("#loginForm loginButton");
const header = document.getElementById("header");
const welcome = document.getElementById("welcome");
const greeting1 = document.querySelector("#welcome .greeting1");
const greeting2 = document.querySelector("#welcome .greeting2");

const CLASSNAME_HIDDEN = "hidden";
const USERNAME_KEY = "id";

//header는 변수가 들어가야 하니 html로 그릴 수 없음
function paintHeader(username) {
  greeting1.innerText = `Hi, ${username}👋`;
  greeting2.innerText = "Good evening.";
}

//3. 리스너의 콜백 함수 - username 저장하기
function onNameSubmit(event) {
  event.preventDefault(); //기본 세팅인 새로고침 없애기
  const username = loginInput.value; //input값 받기
  localStorage.setItem(USERNAME_KEY, username); //값 저장하기
  loginInput.value = ""; //이미 받은 값이니 빈 공간으로?
  loginForm.classList.add(CLASSNAME_HIDDEN);
  welcome.classList.remove(CLASSNAME_HIDDEN);
  header.classList.remove("header-logout");
  header.classList.add("header-login");
  paintHeader(username);
}

//2. 클릭 이벤트 감지하기
loginForm.addEventListener("submit", onNameSubmit);

//4. 저장된 username을 불러오기
//새로고침만 하면 저장된 값이 사라짐 ㅜ 이걸 불러와야 함. 로컬에 저장된 id가 없으면 새로 저장하고, 있으면 불러온다
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername == null) {
  loginForm.addEventListener("submit", onNameSubmit);
} else {
  loginForm.classList.add(CLASSNAME_HIDDEN);
  welcome.classList.remove(CLASSNAME_HIDDEN);
  header.classList.remove("header-logout");
  header.classList.add("header-login");
  paintHeader(savedUsername);
}
