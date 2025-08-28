/*<p class="title">Online Timer & Stopwatch</p>
      <div id="time">00:00:00</div>
      <div class="buttons">
        <button id="startBtn">Start</button>
        <button id="stopBtn">Stop</button>
        <button id="resetBtn">Reset</button>
      </div>*/
const container = document.createElement("div");
container.setAttribute("id", "container");

const title = document.createElement("p");
title.setAttribute("class", "title");
title.innerText = "Online Timer & Stopwatch";

const timeDiv = document.createElement("div");
timeDiv.setAttribute("id", "time");
timeDiv.innerText = "00:00:00";

const buttons = document.createElement("div");
buttons.setAttribute("class", "buttons");

const startBtn = document.createElement("button");
startBtn.setAttribute("id", "startbtn");
startBtn.innerText = "Start";

const stopBtn = document.createElement("button");
stopBtn.setAttribute("id", "stopbtn");
stopBtn.innerText = "Stop";

const resetBtn = document.createElement("button");
resetBtn.setAttribute("id", "resetbtn");
resetBtn.innerText = "Reset";

buttons.appendChild(startBtn);
buttons.appendChild(stopBtn);
buttons.appendChild(resetBtn);

container.appendChild(title);
container.appendChild(timeDiv);
container.appendChild(buttons);

document.body.appendChild(container);
