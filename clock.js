const calendar = document.querySelector("#calendar");
const dayId = calendar.querySelector("#day");
const monthId = calendar.querySelector("#month");
const dateId = calendar.querySelector("#date");
const yearId = calendar.querySelector("#year");

const clock = document.querySelector("#clock");

function getDate() {
  const date = new Date();
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const day = week[date.getDay()];
  const month = date.getMonth() + 1;
  const datenum = date.getDate();
  const year = date.getFullYear();
  dayId.innerText = day;
  monthId.innerText = month;
  dateId.innerText = datenum;
  yearId.innerText = year;
}
function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hour}:${minute}:${second}`;
}
getClock();
getDate();
setInterval(getDate, 1000);
setInterval(getClock, 1000);
