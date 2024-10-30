function digitalClock() {
    const clock = document.querySelector('.clock');
    const hour = document.querySelector('.hour');
    const minute = document.querySelector('.minute');
    const second = document.querySelector('.second');
  
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
  
    hour.innerHTML = hours < 10 ? `0${hours}` : hours;
    minute.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    second.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  }
  
  setInterval(digitalClock, 1000);
  