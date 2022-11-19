//1. 명언 obejct들의 array를 만든다
//2. random() 함수를 이용한다
//3. .length, floor 등을 사용해 array의 객체를 호출할 수 있도록 한다.

const quoteBox = document.querySelector("#quoteContainer .quoteBox");
const authorBox = document.querySelector("#quoteContainer .authorBox");
const quotes = [
  {
    quote:
      "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Before he sets out, the traveler must possess fixed interests and facilities to be served by travel.",
    author: "George Santayana",
  },
  {
    quote: "Nothing is a waste of time if you use the experience wisely.",
    author: "Auguste Rodin",
  },
  {
    quote:
      "Avoiding danger is no safer in the long run than outright exposure. The fearful are caught as often as the bold.",
    author: "Helen Keller",
  },
  {
    quote: "Strong reasons make strong actions.",
    author: "William Shakespeare",
  },
  {
    quote:
      "in the end, it's not the years in your life that count. it's the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "I am not in competition with anyone but myself. my goal is to improve myself continuously.",
    author: "Bill Gates",
  },
  {
    quote: "A man's character is his fate.",
    author: "Heraclitus",
  },
  {
    quote: "anyone who has never made a mistake has never tried anything new.",
    author: "Albert Einstein",
  },
  {
    quote: "The journey is the reward.",
    author: "Steve Jobs",
  },
];

const getTodayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quoteBox.innerText = getTodayQuote.quote;
authorBox.innerText = getTodayQuote.author;
console.log(getTodayQuote);
