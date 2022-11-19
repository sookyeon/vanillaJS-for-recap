//1. 랜덤으로 뽑아낼 수 있도록 array를 만든다
//2. javascript 코드로 html 이미지 요소를 만든다
//3. 이미지 요소의 src가 랜덤 추출되도록 만든다
//4. 이렇게 만든 img를 html로 내보낸다

const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const bgImg = document.createElement("img");

const getBgImg = images[Math.floor(Math.random() * images.length)];
bgImg.src = `./img/bg/${getBgImg}`;
console.log(bgImg);

document.body.appendChild(bgImg);
