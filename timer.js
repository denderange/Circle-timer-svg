const endDate = "10/25/2024 19:00:00"; // month / date / year

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const indicatorDays = document.getElementById("circle-day");
const indicatorHours = document.getElementById("circle-hour");
const indicatorMinutes = document.getElementById("circle-min");
const indicatorSeconds = document.getElementById("circle-sec");

const timerCountdown = setInterval(() => {
  const timerDuration = new Date(endDate).getTime() - new Date().getTime();

  const daysDuration = Math.floor(timerDuration / (1000 * 60 * 60 * 24));
  const hoursDuration = Math.floor(
    (timerDuration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesDuration = Math.floor(
    (timerDuration % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secondsDuration = Math.floor((timerDuration % (1000 * 60)) / 1000);

  days.innerHTML = daysDuration;
  hours.innerHTML = hoursDuration;
  minutes.innerHTML = minutesDuration;
  seconds.innerHTML = secondsDuration;

  // indicator animation:
  indicatorDays.style.strokeDashoffset = 440 - (440 * daysDuration) / 365;
  indicatorHours.style.strokeDashoffset = 440 - (440 * hoursDuration) / 24;
  indicatorMinutes.style.strokeDashoffset = 440 - (440 * minutesDuration) / 60;
  indicatorSeconds.style.strokeDashoffset = 440 - (440 * secondsDuration) / 60;

  if (timerDuration < 0) {
    clearInterval(timerCountdown);
    alert("25.10");
  }
}, 1000);
