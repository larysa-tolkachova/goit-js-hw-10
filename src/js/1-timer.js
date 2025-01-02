import flatpickr from "flatpickr";// Описаний в документації
import "flatpickr/dist/flatpickr.min.css";// Додатковий імпорт стилів
import iziToast from "izitoast";// Описаний у документації
import "izitoast/dist/css/iziToast.min.css";// Додатковий імпорт стилів

const timerDisplay = document.querySelector(".timer");
const inputDateTime = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('.button');
const daysTime = document.querySelector('[data-days]');
const hoursTime = document.querySelector('[data-hours]');
const minutesTime = document.querySelector('[data-minutes]');
const secondsTime = document.querySelector('[data-seconds]');
  
startBtn.addEventListener("click", start);

let selectedDate;
let interval;
startBtn.disabled = true;//кнопка не активна
inputDateTime.disabled = false; //поле активне

const options = {
  enableTime: true,//Вмикає засіб вибору часу
  time_24hr: true,
  defaultDate: new Date(),//Встановлює початкові вибрані дати.
  minuteIncrement: 1,//Регулює крок для введення хвилин 
  onClose(selectedDates) {
    
    const nowDate = new Date();
    selectedDate = selectedDates[0];//дата з календаря
    console.log(selectedDates[0]);

    if (selectedDate < nowDate) {
        iziToast.error({
          title: 'Error',
          message: '"Please choose a date in the future"',
          position: 'topRight',
          timeout: 10000
        });
    } else if (selectedDate || selectedDate > nowDate) {
        startBtn.disabled = false;
    }
 
  },
};

flatpickr(inputDateTime, options);



function start(event) {
console.log(event);

  interval = setInterval(() => {
    const nowDate = new Date();
    const deltaTime = selectedDate - nowDate;

    if (deltaTime <= 0) {
      clearInterval(interval);
      time = convertMs(0);
      return;
    }

    const time = convertMs(deltaTime);// time - { days, hours, minutes, seconds }
    console.log(time);
    daysTime.textContent = `${time.days}`;
    hoursTime.textContent = `${time.hours}`;
    minutesTime.textContent = `${time.minutes}`;
    secondsTime.textContent = `${time.seconds}`;
    
  }, 1000);

    startBtn.disabled = true;
    inputDateTime.disabled = true;
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  
  const days = pad(Math.floor(ms / day));// Remaining days
  const hours = pad(Math.floor((ms % day) / hour));// Remaining hours
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));// Remaining minutes
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));// Remaining seconds

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, "0");
}

