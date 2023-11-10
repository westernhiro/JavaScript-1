const time = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let startTime;
let stopTime = 0;
let timeoutID;

// 時間表示
function displayTime() {
  const currentTime = new Date(Date.now() - startTime + stopTime);
  const h = String(currentTime.getHours()-9);
  const m = String(currentTime.getMinutes());
  const s = String(currentTime.getSeconds());
  const ms = String(currentTime.getMilliseconds()).slice(0,1);

  time.textContent = `${h}:${m}:${s}.${ms}`;
  timeoutID = setTimeout(displayTime, 100);
}

// スタートボタン
startButton.addEventListener('click', () => {
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;
  startTime = Date.now();
  displayTime();
});

// ストップボタン
stopButton.addEventListener('click', () => {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
  clearTimeout(timeoutID);
  stopTime += (Date.now() - startTime);
});

// リセットボタン
resetButton.addEventListener('click', () => {
  startButton.disabled = false;
  stopButton.disabled = true;
  reset.disabled = true;
  time.textContent = '0:0:0.0';
  stopTime = 0;
});