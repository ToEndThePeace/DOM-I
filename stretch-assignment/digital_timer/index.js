/**
 * Get HTML nodes from a CSS query
 * @param {String} selector
 * @returns an array of HTML nodes
 */
function get(selector) {
  return document.querySelectorAll(selector);
}

var myTimer = 0;
var count = 0;
const sbutton = get("#startTimer")[0];
const rbutton = get("#resetButton")[0];

function set(a, b, c, d) {
  get("#secondTens")[0].innerHTML = a;
  get("#secondOnes")[0].innerHTML = b;
  get("#msHundreds")[0].innerHTML = c;
  get("#msTens")[0].innerHTML = d;
}

function timer() {
  if (count === 10000) {
    //make digits red
    get(".digits .digit").forEach(x => {
      x.classList.add("redDigit");
    })
    clearInterval(myTimer);
  } else {
    count += 10;
    let secondTens = 0;
    let secondOnes = 0;
    let msHundreds = 0;
    let msTens     = 0;

    secondTens = Math.floor(count / 10000);
    secondOnes = count < 10000 ? Math.floor(count / 1000) : 0;
    msHundreds = Math.floor((count % 1000) / 100);
    msTens     = Math.floor((count % 100) / 10);

    set(secondTens, secondOnes, msHundreds, msTens);
  }
}

sbutton.addEventListener("click", () => {
  myTimer = setInterval(timer, 10);
  sbutton.disabled = true;
  rbutton.disabled = false;
})

rbutton.addEventListener("click", () => {
  get(".digits .digit").forEach(x => {
    x.classList.remove("redDigit");
  })
  clearInterval(myTimer);
  sbutton.disabled = false;
  rbutton.disabled = true;
  count = 0;
  set(0, 0, 0, 0);
})