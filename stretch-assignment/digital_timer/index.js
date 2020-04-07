let count = 0;

function applyToBody(x) {
  let secTen = Math.floor((x / 1000));
  let secOne = Math.floor((x % 1000) / 100);
  let msHund = Math.floor((x %  100) / 10);
  let msTens = x % 10;
  console.log(secOne, secTen, msTens, msHund)
  document.getElementById("secondTens").textContent = secTen;
  document.getElementById("secondOnes").textContent = secOne;
  document.getElementById("msHundreds").textContent = msHund;
  document.getElementById("msTens")    .textContent = msTens;
}

function inc(y) {
  count++;
  applyToBody(y);
}




// setInterval(inc, 10, count);