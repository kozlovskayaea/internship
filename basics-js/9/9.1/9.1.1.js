// Функциональный стиль. Создание ФУНКЦИИ

// Создаем функцию, передаем в нее параметр

function Clock({ template }) {
  
    let timer; // создаем переменную внутри функции
  

    // Создаем функцию внутри функции
    function render() {
      let date = new Date();
      // создаем новую переменную, в которую помещаем текущую дату и время
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours; 
      // создаем переменную, в которую помещаем извлеченные часы из переменной date и ставим условие
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
      // создаем переменную, в которую помещаем извлеченные минуты из переменной date и ставим условие
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
      // создаем переменную, в которую помещаем извлеченные секунды из переменной date и ставим условие
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
        // Создаем переменную, в которую помещаем изначальный шаблон, в котором меняем (метод .replace) изначально переданные "буквы" на созданные внутри (тут) переменные
        
  
      console.log(output);
      // смотрим, что получилось
    }
  
    this.stop = function() {
      clearInterval(timer);
    };
    // == clock.stop, функция, которая останавливает таймер
  
    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };
    // == clock.start, функция, которая запускает таймер, вызывает функцию render() и создает переменную timer (которая запускается через 1000 мс == 1с)
  
  }
  
  let clock = new Clock({template: 'h:m:s'}); // Создаем новый класс через new
  clock.start(); // вызываем функцию 

// Создание функции с помощью КЛАССА

class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }
  
  
  let clock2 = new Clock({template: 'h:m:s'});
  clock.start();