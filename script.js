const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const result = document.getElementById("result");
const gameContainer = document.querySelector(".game-container");
const controls = document.querySelector(".controls-container");
let cards;
let interval;
let firstCard = false;
let secondCard = false;


//Items array
const items = [
  { name: "4rh", image: "img/4rh.png" },
  { name: "banana", image: "img/banana.png" },
  { name: "cuctus", image: "img/cuctus.png" },
  { name: "dragon", image: "img/dragon.png" },
  { name: "limon", image: "img/limon.png" },
  { name: "frawlh", image: "img/frawlh.png" },
  { name: "idk", image: "img/idk.png" },
  { name: "mango", image: "img/mango.png" },
  { name: "tot", image: "img/tot.png" },
  { name: "dragonfruit", image: "img/dragonfruit.png" },
  { name: "popcorn", image: "img/popcorn.png" },
  { name: "jwafa", image: "img/jwafa.png" },
];

//Initial Time
let seconds = 0,
  minutes = 0;


//Initial moves and win count
let movesCount = 0,
  winCount = 0;

//For timer
const timeGenerator = () => {
  seconds += 1;

  //minutes logic
  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }


  //dh how y9er altime 00:00 alfirst 00 hm llmin w 00 thania is sec
  let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
  timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
};


//3han y7sb almoves
const movesCounter = () => {
  movesCount -= 1;
  moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};


//dh 3shan y5tar something mn array
const generateRandom = (size = 4) => {
  //dh al temp
  let tempArray = [...items];
  // dh for tsw cards
  let cardValues = [];
  size = (size * size) / 2;
  //dh y9eron random al9wr
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    cardValues.push(tempArray[randomIndex]);
    //yshel w y76 fe temp
    tempArray.splice(randomIndex, 1);
  }
  return cardValues;
};
const mGenerater = (cardValues, size = 4) => {
  gameContainer.innerHTML = "";
  cardValues = [...cardValues, ...cardValues];
  // dh 3shan y9er generate llcards
  cardValues.sort(() => Math.random() - 0.5);
  for (let i = 0; i < size * size; i++) {
    gameContainer.innerHTML += `
     <div class="card-container" data-card-value="${cardValues[i].name}">
        <div class="card-before">?</div>
        <div class="card-after">
        <img src="${cardValues[i].image}" class="image"/></div>
     </div>
     `;
  }
  //Grid
  gameContainer.style.gridTemplateColumns = `repeat(${size},auto)`;
  //Cards
  cards = document.querySelectorAll(".card-container");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (!card.classList.contains("matched")) {
        card.classList.add("flipped");
        if (!firstCard) {
          firstCard = card;
          firstCardValue = card.getAttribute("data-card-value");
        } else {
          movesCounter();
          secondCard = card;
          let secondCardValue = card.getAttribute("data-card-value");
          // dh llwin lma y9eron match yfoz
          if (firstCardValue == secondCardValue) {
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");
            firstCard = false;
            winCount += 1;
            // de al win condshn
            if (winCount == Math.floor(cardValues.length / 2)) {
              result.innerHTML = `<h2>You Won</h2> <h4>Moves: ${movesCount}</h4>`;
              stopGame();
            } 
             // de lose condshn
          }if(movesCount == 0){
              result.innerHTML = `<h2>You Lose</h2>`
              stopGame();
            }else {
            //dh for card ma ytshabhon 
            let [tempFirst, tempSecond] = [firstCard, secondCard];
            firstCard = false;
            secondCard = false;
            // dh 3shan lma ma ytshabhon rd yrj3on mkanhm
            let delay = setTimeout(() => {
              tempFirst.classList.remove("flipped");
              tempSecond.classList.remove("flipped");
            }, 900);  
          }
         
        }
      }
    });
  });
};


//Start game
startButton.addEventListener("click", () => {
  movesCount = 15;
  seconds = 0;
  minutes = 0;


  controls.classList.add("hide");
  stopButton.classList.remove("hide");
  startButton.classList.add("hide");
  //Start time
  interval = setInterval(timeGenerator, 1000);
  // de llmoves w che anh y7snb w ele fog lltime (start time)
  moves.innerHTML = `<span>Moves:</span> ${movesCount}`;
  initializer();
});

//Stop game
stopButton.addEventListener(
  "click",
  (stopGame = () => {
    controls.classList.remove("hide");
    stopButton.classList.add("hide");
    startButton.classList.remove("hide");
    clearInterval(interval);
  })
);


//dh 3shan after restart again yrj3 klshe
const initializer = () => {
  result.innerText = "";
  winCount = 0;
  let cardValues = generateRandom();
  console.log(cardValues);
  mGenerater(cardValues);
};


const idk = document.querySelector('.color-changing');
const bodys = document.querySelector('body');
const txt = document.querySelector('.wrapper');
const cCard = document.querySelector('.card-after');


const color = ['#663399','#1CE','#B00B1E','#0D355A'];
const tcolor=['#60D','#B00', 'purple','#59A27A'];
const ccolor =['red','green']

function changeBg(){
  const i = Math.floor(Math.random()*color.length)
  bodys.style.backgroundColor = color[i]

  const t = Math.floor(Math.random()*tcolor.length)
  txt.style.backgroundColor = tcolor[t]

  const c = Math.floor(Math.random()*ccolor.length)
  cCard.style.backgroundColor = ccolor[c]

  
}
idk.addEventListener('click',changeBg)

















