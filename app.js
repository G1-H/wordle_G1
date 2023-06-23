const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let correct_word = "";
let z = 0;
while (z < 5) {
  let x = "";
  x = alphabet[Math.floor(Math.random() * 26)];
  if (correct_word.indexOf(x) == -1) {
    correct_word += x;
    z++;
  } else {
    continue;
  }
}
console.log(correct_word);

const correct = document.querySelector(".correct");
const discorrect = document.querySelector(".discorrect");
let test_word = "";

let row = 1;
let column = 1;
let word1 = document.querySelector("#first_word" + row);
let word2 = document.querySelector("#second_word" + row);
let word3 = document.querySelector("#third_word" + row);
let word4 = document.querySelector("#fourth_word" + row);
let word5 = document.querySelector("#fifth_word" + row);

//row 추가 함수
function row_plus() {
  word1 = document.querySelector("#first_word" + row);
  word2 = document.querySelector("#second_word" + row);
  word3 = document.querySelector("#third_word" + row);
  word4 = document.querySelector("#fourth_word" + row);
  word5 = document.querySelector("#fifth_word" + row);
}
// window.addEventListener("click", function () {
//   f_f_word.innerHTML = "H";
//   console.log("H");
// });

let press_btn = null;
let flag = null;
let x = 65;
let y = 90;
window.addEventListener("keydown", (ev) => {
  if (ev.keyCode == 8) {
    console.log("백스페이스 눌림");
    console.log(--column);
    if (column < 1) {
      column = 1;
    }
    switch (column) {
      case 1:
        word1.innerHTML = "";
        break;
      case 2:
        word2.innerHTML = "";
        break;
      case 3:
        word3.innerHTML = "";
        break;
      case 4:
        word4.innerHTML = "";
        break;
      case 5:
        word5.innerHTML = "";
        break;
    }
  } else if (ev.keyCode >= x && ev.keyCode <= y) {
    press_btn = ev.key;
    if (word1.innerHTML == "") {
      console.log("첫번째 비어잇음");
      word1.innerHTML = press_btn.toUpperCase();
      console.log(column++);
    } else if (word2.innerHTML == "") {
      console.log("두번째 차 있음");
      word2.innerHTML = press_btn.toUpperCase();
      console.log(column++);
    } else if (word3.innerHTML == "") {
      console.log("세번째 차 있음");
      word3.innerHTML = press_btn.toUpperCase();
      console.log(column++);
    } else if (word4.innerHTML == "") {
      console.log("네번째 차 있음");
      word4.innerHTML = press_btn.toUpperCase();
      console.log(column++);
    } else if (word5.innerHTML == "") {
      console.log("다섯번째 차 있음");
      word5.innerHTML = press_btn.toUpperCase();
      console.log(column++);
      column = 1;
      test_word =
        word1.innerHTML +
        word2.innerHTML +
        word3.innerHTML +
        word4.innerHTML +
        word5.innerHTML;
      if (correct_word == test_word) {
        console.log("정답");
        correct.innerHTML += `<span class='answer'> ${correct_word} </span> 정답입니다.
       <strong> 다시 게임 하시려면 ctrl+R을 눌러주세요.</strong>`;
        correct.style.display = "block";
        x = 2;
        y = 1;
      } else {
        let i = 0;
        for (let j = 0; j < 5; j++) {
          i = 0;
          do {
            document.querySelector("#" + test_word[j]).style.backgroundColor =
              "rgba(0,0,0,0.8)";
            console.log(test_word[j], correct_word.indexOf(test_word[j], i));
            if (correct_word.indexOf(test_word[j]) != -1) {
              document.querySelector("#" + test_word[j]).style.backgroundColor =
                "lightgray";
              console.log("hihi", j);
              console.log("무야", test_word[j]);
              switch (j) {
                case 0:
                  setTimeout(function () {
                    if (test_word[j] == correct_word[j]) {
                      word1.style.backgroundColor = "tomato";
                      word1.style.color = "white";
                    } else {
                      word1.style.backgroundColor = "skyblue";
                      word1.style.color = "white";
                    }
                  }, 200);
                  break;
                case 1:
                  setTimeout(function () {
                    if (test_word[j] == correct_word[j]) {
                      word2.style.backgroundColor = "tomato";
                      word2.style.color = "white";
                    } else {
                      word2.style.backgroundColor = "skyblue";
                      word2.style.color = "white";
                    }
                  }, 300);
                  break;
                case 2:
                  setTimeout(function () {
                    if (test_word[j] == correct_word[j]) {
                      word3.style.backgroundColor = "tomato";
                      word3.style.color = "white";
                    } else {
                      word3.style.backgroundColor = "skyblue";
                      word3.style.color = "white";
                    }
                  }, 400);
                  break;
                case 3:
                  setTimeout(function () {
                    if (test_word[j] == correct_word[j]) {
                      word4.style.backgroundColor = "tomato";
                      word4.style.color = "white";
                    } else {
                      word4.style.backgroundColor = "skyblue";
                      word4.style.color = "white";
                    }
                  }, 500);
                  break;
                case 4:
                  setTimeout(function () {
                    if (test_word[j] == correct_word[j]) {
                      word5.style.backgroundColor = "tomato";
                      word5.style.color = "white";
                    } else {
                      word5.style.backgroundColor = "skyblue";
                      word5.style.color = "white";
                    }
                  }, 600);
                  break;
              }
            }
            i = correct_word.indexOf(test_word[j], i) + 1;
          } while (correct_word.indexOf(test_word[j], i) != -1);
        }
        word1.style.animation = "0.5s ease-in 0.1s action1";
        word2.style.animation = "0.5s ease-in 0.2s action1";
        word3.style.animation = "0.5s ease-in 0.3s action1";
        word4.style.animation = "0.5s ease-in 0.4s action1";
        word5.style.animation = "0.5s ease-in 0.5s action1";
      }
      if (row < 6) {
        console.log(++row);
        setTimeout(function () {
          row_plus();
        }, 600);
      } else {
        if (correct_word != test_word) {
          discorrect.innerHTML += `기회 내에 맞추지 못했습니다.
         <strong> 다시 게임 하시려면 ctrl+R을 눌러주세요.</strong>`;
          discorrect.style.display = "block";
          column = "작동하지마";
        }
      }
    }
  }
});

//timer

let timer = document.querySelector(".timer");
const start_time = new Date();
function setTime() {
  let now = new Date();
  let last_time = new Date(now - start_time);
  const min = last_time.getMinutes().toString().padStart(2, "0");
  const sec = last_time.getSeconds().toString().padStart(2, "0");
  timer.innerText = `${min}:${sec}`;
}
window.setInterval(setTime, 1000);
